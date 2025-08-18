'use client';

import { useState, useEffect, FormEvent } from "react";

type Event = { name: string; date: string };

export default function EventsPage() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [events, setEvents] = useState<Event[]>([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("events");
    if (stored) {
      setEvents(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  // Debounce search
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !date) return;

    setEvents([...events, { name, date }]);
    setName("");
    setDate("");
  };

  const handleDelete = (index: number) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Search Events</h1>
        <input
        type="text"
        placeholder="Search events"
        className="w-full border p-2 rounded mb-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h1 className="text-2xl font-bold mb-2">Events</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Event Name"
          className="w-full border p-2 rounded"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          className="w-full border p-2 rounded"
          value={date}
          required
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Add Event
        </button>
      </form>

    {loading ? <div className="text-center text-sm">Hold on we are fetching data...</div> :
          <ul className="space-y-2">
        {filteredEvents.map((event, index) => (
          <li
            key={index}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span>
              {event.name} – {event.date}
            </span>
            <button
              className="text-red-500"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>}
    </div>
  );
}
