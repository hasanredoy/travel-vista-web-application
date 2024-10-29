// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
import Heading from '@/components/reuseble/Heading';

// // Fix default marker icon
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
// });

export default function InteractiveMap() {
  // // Define sample marker data
  // const markers =  [
  //   { position: [25.276987, 55.296249], title: 'Dubai, UAE', description: 'Explore Dubai’s stunning skyline and cultural heritage.' },
  //   { position: [40.712776, -74.005974], title: 'New York City, USA', description: 'Discover the vibrant life of New York City.' },
  //   { position: [48.856613, 2.352222], title: 'Paris, France', description: 'Visit the iconic landmarks of Paris.' },
  //   { position: [35.689487, 139.691711], title: 'Tokyo, Japan', description: 'Experience the unique blend of tradition and technology in Tokyo.' },
  //   { position: [51.507351, -0.127758], title: 'London, UK', description: 'Explore the historical and modern attractions of London.' },
  //   { position: [-33.86882, 151.20929], title: 'Sydney, Australia', description: 'Visit the iconic Sydney Opera House and beautiful beaches.' },
  //   { position: [41.902782, 12.496366], title: 'Rome, Italy', description: 'Step into history with the Colosseum and Roman ruins.' },
  //   { position: [55.755825, 37.617298], title: 'Moscow, Russia', description: 'Marvel at the architecture of Red Square and the Kremlin.' },
  //   { position: [-22.906847, -43.172897], title: 'Rio de Janeiro, Brazil', description: 'Soak up the sun on Copacabana beach.' },
  //   { position: [1.352083, 103.819839], title: 'Singapore', description: 'Experience the vibrant culture and skyline of Singapore.' },
  //   { position: [37.774929, -122.419418], title: 'San Francisco, USA', description: 'Walk across the Golden Gate Bridge.' },
  //   { position: [30.04442, 31.235712], title: 'Cairo, Egypt', description: 'Visit the Pyramids of Giza.' },
  //   { position: [34.693738, 135.502165], title: 'Osaka, Japan', description: 'Explore Osaka’s famous food scene.' },
  //   { position: [19.432608, -99.133209], title: 'Mexico City, Mexico', description: 'Discover the rich history of Mexico City.' },
  //   { position: [52.520008, 13.404954], title: 'Berlin, Germany', description: 'See the Brandenburg Gate and Berlin Wall.' },
  //   { position: [39.904202, 116.407394], title: 'Beijing, China', description: 'Visit the Great Wall and Forbidden City.' },
  //   { position: [-34.603722, -58.381592], title: 'Buenos Aires, Argentina', description: 'Explore Argentina’s capital.' },
  //   { position: [25.033964, 121.564468], title: 'Taipei, Taiwan', description: 'See Taipei 101 and night markets.' }
  // ];
  return (
  <section className='  w-[94%] my-10 md:w-[90%] lg:w-[85%] mx-auto'>
    <Heading t1={'Travel '} imp={' World Wide'}></Heading>
      {/* <MapContainer className='mx-auto' center={[20, 0]} zoom={2} style={{ height: '400px', width: '80%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker?.position}>
          <Popup>
            <strong>{marker.title}</strong><br />
            {marker.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer> */}
  </section>
  );
}
