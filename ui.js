class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
    this.visibility = document.getElementById('w-visibility');
  }

  paint(weather){
    this.location.textContent = weather.display_location.full;
    this.desc.textContent = weather.weather;
    this.string.textContent = weather.temperature_string;
   
    this.humidity.textContent = `Umezeală Relativă ${weather.relative_humidity}`;
    this.feelsLike.textContent = `Se simte ca și: ${weather.feelslike_c}°C`;
    this.dewpoint.textContent = `Punct de Condensare ${weather.dewpoint_c}°C`;
    this.wind.textContent = `Vânt de ${weather.wind_kph} Km/h`;
    this.visibility.textContent = `Poți vedea maxim: ${weather.visibility_km} Km`;
  }
}
