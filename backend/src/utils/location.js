const fs = require('fs');
const path = require('path');

function formatDistanceKm(distanceMeters) {
  return (distanceMeters / 1000).toFixed(1) + 'km';
}

function getSampleLocation() {
  return { latitude: 9.02, longitude: 7.49, name: 'Karu, Abuja' };
}

function ensureDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

module.exports = {
  formatDistanceKm,
  getSampleLocation,
  ensureDirSync,
};
