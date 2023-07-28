import React from 'react';

interface Position {
  coords: {
    latitude: number;
    longitude: number;
  };
}

export default function FindLocation(): JSX.Element {
  const handleClick = (): void => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: Position) => {
          const userLocation = `${position.coords.latitude},${position.coords.longitude}`;
          const shopLocation = `Спортивний клуб ВІКТОРІЯ, вул.Спортивна, 3, Ostrytsya, Chernivtsi Oblast, 60520`; // Set your shop's location

          const googleMapsUrl = `https://www.google.com/maps/dir/${encodeURIComponent(
            userLocation,
          )}/${encodeURIComponent(shopLocation)}`;
          window.location.href = googleMapsUrl;
        },
        (error: GeolocationPositionError) => {
          console.error('Error getting user location:', error);
          // Handle error when unable to retrieve user's location
        },
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      // Handle case when geolocation is not supported
    }
  };

  return (
    <button className="google-maps-btn" onClick={handleClick}>
      Дістатися
    </button>
  );
}
