import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Ambulance,
  ArrowLeft,
  CalendarClock,
  CarFront,
  Check,
  ChevronRight,
  Clock3,
  LocateFixed,
  MapPin,
  Package,
  ShieldPlus,
  Stethoscope,
  UserRound,
} from 'lucide-react';
import './styles.css';

const quickPlaces = [
  'Home - Indiranagar',
  'Manipal Hospital, Old Airport Road',
  'Apollo Clinic, Koramangala',
  'Office - Manyata Tech Park',
];

const ambulanceProviders = [
  {
    id: 1,
    name: 'Medulance Rapid Care',
    eta: '4 min',
    distance: '0.8 km',
    price: '₹1,850',
    vehicle: 'Force Traveller ICU',
    category: 'Advance life support',
    tag: 'Doctor on call',
  },
  {
    id: 2,
    name: 'StanPlus Emergency',
    eta: '6 min',
    distance: '1.4 km',
    price: '₹1,350',
    vehicle: 'Tata Winger',
    category: 'Basic life support',
    tag: 'Oxygen ready',
  },
  {
    id: 3,
    name: 'Apollo Ambulance Assist',
    eta: '9 min',
    distance: '2.2 km',
    price: '₹1,050',
    vehicle: 'Maruti Eeco',
    category: 'Patient transfer',
    tag: 'Wheelchair support',
  },
  {
    id: 4,
    name: 'Sakra Critical Response',
    eta: '12 min',
    distance: '3.1 km',
    price: '₹2,250',
    vehicle: 'ICU Ambulance',
    category: 'Advance life support',
    tag: 'Ventilator ready',
  },
];

function formatSlot(date) {
  return new Intl.DateTimeFormat('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(date);
}

function createCabSlots() {
  const now = new Date();
  const start = new Date(now);
  start.setHours(start.getHours() + 1, now.getMinutes() < 30 ? 30 : 0, 0, 0);
  if (start <= now) start.setMinutes(start.getMinutes() + 30);

  const end = new Date(now);
  end.setDate(end.getDate() + 7);

  const slots = [];
  const cursor = new Date(start);
  while (cursor <= end) {
    slots.push(new Date(cursor));
    cursor.setMinutes(cursor.getMinutes() + 30);
  }
  return slots;
}

function App() {
  const [tab, setTab] = useState('Health');
  const [screen, setScreen] = useState('home');
  const [pickup, setPickup] = useState('Current location - 12th Main, Indiranagar');
  const [drop, setDrop] = useState('Manipal Hospital, Old Airport Road');
  const [selectedService, setSelectedService] = useState('');
  const [slot, setSlot] = useState('');
  const [booked, setBooked] = useState(null);
  const slots = useMemo(createCabSlots, []);

  const canShowRoute = pickup.trim() && drop.trim();

  function selectHealth() {
    setTab('Health');
    setScreen('health');
    setBooked(null);
  }

  function resetHome(nextTab) {
    setTab(nextTab);
    setScreen('home');
    setBooked(null);
  }

  function bookCab() {
    setBooked({
      title: 'Health cab scheduled',
      detail: slot ? formatSlot(new Date(slot)) : 'Select a slot first',
      icon: CarFront,
    });
    setScreen('confirmed');
  }

  function bookAmbulance(provider) {
    setBooked({
      title: 'Ambulance booked',
      detail: `${provider.name} arriving in ${provider.eta}`,
      icon: Ambulance,
    });
    setScreen('confirmed');
  }

  return (
    <main className="stage">
      <section className="phone" aria-label="Uber Health interactive phone prototype">
        <div className="phone-chrome">
          <span className="speaker" />
          <span className="camera" />
        </div>
        <div className="app-screen">
          <header className="status-bar">
            <span>9:41</span>
            <span>5G 100%</span>
          </header>

          <div className="app-header">
            {screen !== 'home' && (
              <button className="icon-button" aria-label="Back" onClick={() => setScreen('health')}>
                <ArrowLeft size={20} />
              </button>
            )}
            <div>
              <p className="eyebrow">Uber</p>
              <h1>{screen === 'home' ? 'Where to?' : 'Health'}</h1>
            </div>
            <button className="avatar-button" aria-label="Profile">
              <UserRound size={20} />
            </button>
          </div>

          <nav className="tabs" aria-label="Uber app sections">
            <button className={tab === 'Uber' ? 'active' : ''} onClick={() => resetHome('Uber')}>
              Uber
            </button>
            <button className={tab === 'Parcel' ? 'active' : ''} onClick={() => resetHome('Parcel')}>
              Parcel
            </button>
            <button className={tab === 'Health' ? 'active' : ''} onClick={selectHealth}>
              Health
            </button>
          </nav>

          <div className="content">
            {screen === 'home' && (
              <HomeScreen tab={tab} onHealth={selectHealth} />
            )}

            {screen === 'health' && (
              <HealthScreen
                pickup={pickup}
                drop={drop}
                setPickup={setPickup}
                setDrop={setDrop}
                canShowRoute={canShowRoute}
                onRoute={() => setScreen('route')}
              />
            )}

            {screen === 'route' && (
              <RouteScreen
                pickup={pickup}
                drop={drop}
                onCab={() => {
                  setSelectedService('cab');
                  setScreen('cab');
                }}
                onAmbulance={() => {
                  setSelectedService('ambulance');
                  setScreen('ambulance');
                }}
              />
            )}

            {screen === 'cab' && (
              <CabScreen
                slots={slots}
                slot={slot}
                setSlot={setSlot}
                onBook={bookCab}
              />
            )}

            {screen === 'ambulance' && (
              <AmbulanceScreen onBook={bookAmbulance} />
            )}

            {screen === 'confirmed' && (
              <ConfirmScreen
                booked={booked}
                selectedService={selectedService}
                onDone={() => setScreen('health')}
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function HomeScreen({ tab, onHealth }) {
  if (tab === 'Parcel') {
    return (
      <section className="empty-state">
        <Package size={36} />
        <h2>Send a package</h2>
        <p>Choose Health to see the new patient transport flow.</p>
        <button className="primary-button" onClick={onHealth}>Open Health</button>
      </section>
    );
  }

  if (tab === 'Health') {
    return (
      <section className="empty-state health-hero">
        <ShieldPlus size={40} />
        <h2>Healthcare rides, when they matter</h2>
        <p>Book hospital visits or emergency ambulances from the Uber app.</p>
        <button className="primary-button" onClick={onHealth}>Start booking</button>
      </section>
    );
  }

  return (
    <section className="home-list">
      <button className="search-card" onClick={onHealth}>
        <MapPin size={20} />
        <span>Try Health rides</span>
        <ChevronRight size={18} />
      </button>
      {quickPlaces.map((place) => (
        <button className="place-row" key={place} onClick={onHealth}>
          <Clock3 size={18} />
          <span>{place}</span>
        </button>
      ))}
    </section>
  );
}

function HealthScreen({ pickup, drop, setPickup, setDrop, canShowRoute, onRoute }) {
  return (
    <section className="flow-card">
      <div className="input-stack">
        <label>
          <span>Pickup</span>
          <div className="input-shell">
            <LocateFixed size={18} />
            <input value={pickup} onChange={(event) => setPickup(event.target.value)} />
          </div>
        </label>
        <label>
          <span>Drop</span>
          <div className="input-shell">
            <Stethoscope size={18} />
            <input value={drop} onChange={(event) => setDrop(event.target.value)} />
          </div>
        </label>
      </div>
      <div className="suggestions">
        {quickPlaces.slice(1, 4).map((place) => (
          <button key={place} onClick={() => setDrop(place)}>{place}</button>
        ))}
      </div>
      <button className="primary-button" disabled={!canShowRoute} onClick={onRoute}>
        Show route and options
      </button>
    </section>
  );
}

function RouteScreen({ pickup, drop, onCab, onAmbulance }) {
  return (
    <section className="route-screen">
      <div className="map">
        <div className="map-grid" />
        <div className="route-line" />
        <span className="pin pickup-pin">A</span>
        <span className="pin drop-pin">B</span>
        <div className="map-chip">8.6 km • 22 min</div>
      </div>
      <div className="route-details">
        <p><strong>From</strong>{pickup}</p>
        <p><strong>To</strong>{drop}</p>
      </div>
      <div className="service-grid">
        <button className="service-card" onClick={onCab}>
          <CarFront size={26} />
          <span>Cabs</span>
          <small>Scheduled doctor visits</small>
        </button>
        <button className="service-card urgent" onClick={onAmbulance}>
          <Ambulance size={26} />
          <span>Ambulances</span>
          <small>Emergency dispatch</small>
        </button>
      </div>
    </section>
  );
}

function CabScreen({ slots, slot, setSlot, onBook }) {
  return (
    <section className="cab-screen">
      <div className="cab-banner">
        <CalendarClock size={26} />
        <div>
          <h2>Schedule Health cab</h2>
          <p>Slots open from the next hour for the next 7 days.</p>
        </div>
      </div>
      <div className="slot-list">
        {slots.slice(0, 28).map((time) => {
          const value = time.toISOString();
          return (
            <button
              className={slot === value ? 'slot selected' : 'slot'}
              key={value}
              onClick={() => setSlot(value)}
            >
              {formatSlot(time)}
            </button>
          );
        })}
      </div>
      <button className="primary-button sticky-action" disabled={!slot} onClick={onBook}>
        Schedule cab
      </button>
    </section>
  );
}

function AmbulanceScreen({ onBook }) {
  return (
    <section className="ambulance-screen">
      <div className="list-heading">
        <h2>Nearby ambulances</h2>
        <p>Nearest available partners first</p>
      </div>
      {ambulanceProviders.map((provider) => (
        <button className="ambulance-card" key={provider.id} onClick={() => onBook(provider)}>
          <div className="ambulance-icon">
            <Ambulance size={24} />
          </div>
          <div className="provider-copy">
            <strong>{provider.name}</strong>
            <span>{provider.vehicle}</span>
            <small>{provider.category} • {provider.tag}</small>
          </div>
          <div className="provider-meta">
            <strong>{provider.price}</strong>
            <span>{provider.eta}</span>
            <small>{provider.distance}</small>
          </div>
        </button>
      ))}
    </section>
  );
}

function ConfirmScreen({ booked, selectedService, onDone }) {
  const Icon = booked?.icon || Check;
  const [incidentNote, setIncidentNote] = useState('');
  const [incidentSubmitted, setIncidentSubmitted] = useState(false);
  const isAmbulance = selectedService === 'ambulance';

  function submitIncidentBrief(event) {
    event.preventDefault();
    if (!incidentNote.trim()) return;
    setIncidentSubmitted(true);
  }

  return (
    <section className="confirm-screen">
      <div className={isAmbulance ? 'confirm-icon emergency' : 'confirm-icon'}>
        <Icon size={36} />
      </div>
      <h2>{booked?.title}</h2>
      <p>{booked?.detail}</p>
      <div className="driver-card">
        <span className="driver-photo" />
        <div>
          <strong>{isAmbulance ? 'Dispatch team assigned' : 'Driver will be assigned soon'}</strong>
          <span>Track status inside Uber Health</span>
        </div>
      </div>
      {isAmbulance && (
        <form className="incident-card" onSubmit={submitIncidentBrief}>
          <label>
            <span>Incident brief for driver</span>
            <textarea
              value={incidentNote}
              onChange={(event) => {
                setIncidentNote(event.target.value);
                setIncidentSubmitted(false);
              }}
              placeholder="Example: Chest pain, conscious patient, third floor, lift available"
              rows={4}
            />
          </label>
          <button className="secondary-button" type="submit" disabled={!incidentNote.trim()}>
            {incidentSubmitted ? 'Brief sent' : 'Submit brief'}
          </button>
        </form>
      )}
      <button className="primary-button" onClick={onDone}>Book another</button>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
