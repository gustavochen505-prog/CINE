const USD_RATE = 7.8;

const rawMovies = [
  // Suspenso
  { title: "Gone Girl", wikiTitle: "Gone_Girl_(film)", category: "Suspenso", rating: "B15", durationMin: 149, time: "20:40", priceGTQ: 46 },
  { title: "Prisoners", wikiTitle: "Prisoners_(2013_film)", category: "Suspenso", rating: "B15", durationMin: 153, time: "22:15", priceGTQ: 51 },
  { title: "Se7en", wikiTitle: "Se7en", category: "Suspenso", rating: "C", durationMin: 127, time: "19:25", priceGTQ: 45 },
  { title: "Shutter Island", wikiTitle: "Shutter_Island_(film)", category: "Suspenso", rating: "B15", durationMin: 138, time: "21:45", priceGTQ: 48 },
  { title: "Nightcrawler", wikiTitle: "Nightcrawler_(film)", category: "Suspenso", rating: "B15", durationMin: 117, time: "18:45", priceGTQ: 44 },
  { title: "Zodiac", wikiTitle: "Zodiac_(film)", category: "Suspenso", rating: "B15", durationMin: 157, time: "20:10", priceGTQ: 47 },
  { title: "The Silence of the Lambs", wikiTitle: "The_Silence_of_the_Lambs_(film)", category: "Suspenso", rating: "C", durationMin: 118, time: "17:55", priceGTQ: 43 },
  { title: "The Girl on the Train", wikiTitle: "The_Girl_on_the_Train_(film)", category: "Suspenso", rating: "B15", durationMin: 112, time: "21:20", priceGTQ: 46 },

  // Terror
  { title: "Scream VI", wikiTitle: "Scream_VI", category: "Terror", rating: "B15", durationMin: 122, time: "18:20", priceGTQ: 52 },
  { title: "The Conjuring", wikiTitle: "The_Conjuring", category: "Terror", rating: "B15", durationMin: 112, time: "22:40", priceGTQ: 49 },
  { title: "It", wikiTitle: "It_(2017_film)", category: "Terror", rating: "C", durationMin: 135, time: "21:30", priceGTQ: 53 },
  { title: "Hereditary", wikiTitle: "Hereditary_(film)", category: "Terror", rating: "C", durationMin: 127, time: "20:50", priceGTQ: 50 },
  { title: "Annabelle", wikiTitle: "Annabelle_(film)", category: "Terror", rating: "B15", durationMin: 99, time: "19:15", priceGTQ: 47 },
  { title: "Insidious", wikiTitle: "Insidious_(film)", category: "Terror", rating: "B15", durationMin: 103, time: "23:00", priceGTQ: 48 },
  { title: "The Nun", wikiTitle: "The_Nun_(2018_film)", category: "Terror", rating: "B15", durationMin: 96, time: "20:25", priceGTQ: 46 },
  { title: "A Quiet Place", wikiTitle: "A_Quiet_Place_(film)", category: "Terror", rating: "B12", durationMin: 90, time: "18:55", priceGTQ: 45 },

  // Ciencia Ficcion
  { title: "Dune: Part Two", wikiTitle: "Dune:_Part_Two", category: "Ciencia Ficcion", rating: "B12", durationMin: 166, time: "22:00", priceGTQ: 56 },
  { title: "Interstellar", wikiTitle: "Interstellar_(film)", category: "Ciencia Ficcion", rating: "B", durationMin: 169, time: "21:20", priceGTQ: 50 },
  { title: "Avatar", wikiTitle: "Avatar_(2009_film)", category: "Ciencia Ficcion", rating: "B", durationMin: 162, time: "19:10", priceGTQ: 54 },
  { title: "Inception", wikiTitle: "Inception", category: "Ciencia Ficcion", rating: "B12", durationMin: 148, time: "20:30", priceGTQ: 53 },
  { title: "The Matrix", wikiTitle: "The_Matrix", category: "Ciencia Ficcion", rating: "B12", durationMin: 136, time: "19:50", priceGTQ: 52 },
  { title: "Blade Runner 2049", wikiTitle: "Blade_Runner_2049", category: "Ciencia Ficcion", rating: "B15", durationMin: 164, time: "21:05", priceGTQ: 55 },
  { title: "Arrival", wikiTitle: "Arrival_(film)", category: "Ciencia Ficcion", rating: "B12", durationMin: 116, time: "18:35", priceGTQ: 49 },
  { title: "Ex Machina", wikiTitle: "Ex_Machina_(film)", category: "Ciencia Ficcion", rating: "B15", durationMin: 108, time: "17:40", priceGTQ: 48 },

  // Superheroes
  { title: "Avengers: Endgame", wikiTitle: "Avengers:_Endgame", category: "Superheroes", rating: "B12", durationMin: 181, time: "17:40", priceGTQ: 58 },
  { title: "The Batman", wikiTitle: "The_Batman_(film)", category: "Superheroes", rating: "B12", durationMin: 176, time: "20:00", priceGTQ: 56 },
  { title: "Spider-Man: No Way Home", wikiTitle: "Spider-Man:_No_Way_Home", category: "Superheroes", rating: "B12", durationMin: 148, time: "18:10", priceGTQ: 57 },
  { title: "Iron Man", wikiTitle: "Iron_Man_(2008_film)", category: "Superheroes", rating: "B12", durationMin: 126, time: "16:20", priceGTQ: 51 },
  { title: "Doctor Strange", wikiTitle: "Doctor_Strange_(2016_film)", category: "Superheroes", rating: "B12", durationMin: 115, time: "19:30", priceGTQ: 52 },
  { title: "Black Panther", wikiTitle: "Black_Panther_(film)", category: "Superheroes", rating: "B12", durationMin: 134, time: "21:00", priceGTQ: 53 },
  { title: "Deadpool", wikiTitle: "Deadpool_(film)", category: "Superheroes", rating: "C", durationMin: 108, time: "22:25", priceGTQ: 54 },
  { title: "Guardians of the Galaxy Vol. 3", wikiTitle: "Guardians_of_the_Galaxy_Vol._3", category: "Superheroes", rating: "B12", durationMin: 150, time: "20:40", priceGTQ: 56 },

  // Drama
  { title: "Oppenheimer", wikiTitle: "Oppenheimer_(film)", category: "Drama", rating: "B15", durationMin: 180, time: "21:50", priceGTQ: 57 },
  { title: "The Godfather", wikiTitle: "The_Godfather", category: "Drama", rating: "C", durationMin: 175, time: "20:20", priceGTQ: 52 },
  { title: "Whiplash", wikiTitle: "Whiplash_(2014_film)", category: "Drama", rating: "B15", durationMin: 106, time: "18:00", priceGTQ: 46 },
  { title: "Parasite", wikiTitle: "Parasite_(film)", category: "Drama", rating: "B15", durationMin: 132, time: "19:05", priceGTQ: 50 },
  { title: "Forrest Gump", wikiTitle: "Forrest_Gump", category: "Drama", rating: "B", durationMin: 142, time: "16:10", priceGTQ: 45 },
  { title: "Fight Club", wikiTitle: "Fight_Club", category: "Drama", rating: "C", durationMin: 139, time: "22:10", priceGTQ: 51 },
  { title: "The Shawshank Redemption", wikiTitle: "The_Shawshank_Redemption", category: "Drama", rating: "B12", durationMin: 142, time: "17:25", priceGTQ: 44 },
  { title: "Joker", wikiTitle: "Joker_(2019_film)", category: "Drama", rating: "C", durationMin: 122, time: "20:35", priceGTQ: 50 },

  // Romance
  { title: "Titanic", wikiTitle: "Titanic_(1997_film)", category: "Romance", rating: "B", durationMin: 194, time: "16:20", priceGTQ: 44 },
  { title: "The Notebook", wikiTitle: "The_Notebook", category: "Romance", rating: "B", durationMin: 123, time: "18:50", priceGTQ: 46 },
  { title: "Pride and Prejudice", wikiTitle: "Pride_&_Prejudice_(2005_film)", category: "Romance", rating: "B", durationMin: 129, time: "18:15", priceGTQ: 45 },
  { title: "A Star Is Born", wikiTitle: "A_Star_Is_Born_(2018_film)", category: "Romance", rating: "B12", durationMin: 136, time: "21:10", priceGTQ: 49 },
  { title: "La La Land", wikiTitle: "La_La_Land", category: "Romance", rating: "B", durationMin: 128, time: "20:00", priceGTQ: 47 },
  { title: "Before Sunrise", wikiTitle: "Before_Sunrise", category: "Romance", rating: "B", durationMin: 101, time: "19:45", priceGTQ: 43 },
  { title: "Notting Hill", wikiTitle: "Notting_Hill_(film)", category: "Romance", rating: "B", durationMin: 124, time: "17:20", priceGTQ: 42 },
  { title: "Me Before You", wikiTitle: "Me_Before_You_(film)", category: "Romance", rating: "B", durationMin: 110, time: "19:25", priceGTQ: 44 },

  // Animacion
  { title: "Toy Story 4", wikiTitle: "Toy_Story_4", category: "Animacion", rating: "A", durationMin: 100, time: "13:40", priceGTQ: 36 },
  { title: "Inside Out 2", wikiTitle: "Inside_Out_2", category: "Animacion", rating: "A", durationMin: 97, time: "15:10", priceGTQ: 37 },
  { title: "Coco", wikiTitle: "Coco_(2017_film)", category: "Animacion", rating: "A", durationMin: 105, time: "16:00", priceGTQ: 39 },
  { title: "Spider-Man: Into the Spider-Verse", wikiTitle: "Spider-Man:_Into_the_Spider-Verse", category: "Animacion", rating: "A", durationMin: 117, time: "17:00", priceGTQ: 40 },
  { title: "Up", wikiTitle: "Up_(2009_film)", category: "Animacion", rating: "A", durationMin: 96, time: "11:55", priceGTQ: 35 },
  { title: "Frozen II", wikiTitle: "Frozen_II", category: "Animacion", rating: "A", durationMin: 103, time: "12:50", priceGTQ: 36 },
  { title: "Minions: The Rise of Gru", wikiTitle: "Minions:_The_Rise_of_Gru", category: "Animacion", rating: "A", durationMin: 90, time: "13:05", priceGTQ: 34 },
  { title: "How to Train Your Dragon", wikiTitle: "How_to_Train_Your_Dragon_(film)", category: "Animacion", rating: "A", durationMin: 98, time: "14:15", priceGTQ: 36 }
];

const categoryOrder = [
  "Suspenso",
  "Terror",
  "Ciencia Ficcion",
  "Superheroes",
  "Drama",
  "Romance",
  "Animacion"
];

const movieRows = document.getElementById("movieRows");
const seatsGrid = document.getElementById("seatsGrid");
const selectedMovieInfo = document.getElementById("selectedMovieInfo");
const selectedSeatsText = document.getElementById("selectedSeatsText");
const totalGTQ = document.getElementById("totalGTQ");
const totalUSD = document.getElementById("totalUSD");
const statusMessage = document.getElementById("statusMessage");
const paymentForm = document.getElementById("paymentForm");
const cardNameInput = document.getElementById("cardName");
const cardNumberInput = document.getElementById("cardNumber");
const cardExpInput = document.getElementById("cardExp");
const cardCvvInput = document.getElementById("cardCvv");
const themeToggle = document.getElementById("themeToggle");
const cancelReservationBtn = document.getElementById("cancelReservation");
const downloadTicketBtn = document.getElementById("downloadTicket");
const openSeatsModalBtn = document.getElementById("openSeatsModal");
const openSummaryModalBtn = document.getElementById("openSummaryModal");
const seatsModal = document.getElementById("seatsModal");
const summaryModal = document.getElementById("summaryModal");
const closeSeatsModalBtn = document.getElementById("closeSeatsModal");
const closeSummaryModalBtn = document.getElementById("closeSummaryModal");

let movies = [];
let movieSections = [];
let selectedMovieId = "";
let selectedSeats = new Set();
let reservations = [];
let reservationCounter = 1;
let reservedByShow = {};

const seatRows = Array.from({ length: 10 }, (_, index) => ({ row: index + 1, count: 10 }));

function formatGTQ(value) {
  return `Q${value.toFixed(2)}`;
}

function formatUSD(value) {
  return `$${value.toFixed(2)}`;
}

function getCurrentMovie() {
  return movies.find((movie) => movie.id === selectedMovieId) || null;
}

function getMovieById(movieId) {
  return movies.find((movie) => movie.id === movieId) || null;
}

function createReservedSet(seed) {
  const taken = new Set();
  for (let i = 0; i < 4; i += 1) {
    const row = ((seed * 3 + i * 2) % 10) + 1;
    const seat = ((seed * 7 + i * 3) % 10) + 1;
    taken.add(`${row}-${seat}`);
  }
  return taken;
}

function buildMovieSections() {
  movieSections = categoryOrder
    .map((category) => ({
      title: category,
      movieIds: movies.filter((movie) => movie.category === category).map((movie) => movie.id)
    }))
    .filter((section) => section.movieIds.length > 0);
}

async function fetchPosterFromWikipedia(wikiTitle) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiTitle)}`;
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) {
      return "";
    }

    const data = await response.json();
    if (data.thumbnail && data.thumbnail.source) {
      return data.thumbnail.source;
    }
    if (data.originalimage && data.originalimage.source) {
      return data.originalimage.source;
    }
    return "";
  } catch (error) {
    return "";
  } finally {
    clearTimeout(timeoutId);
  }
}

// Carga solo peliculas con poster real encontrado por titulo.
async function loadMoviesWithRealPosters() {
  const resolved = await Promise.all(
    rawMovies.map(async (movie, index) => {
      const poster = await fetchPosterFromWikipedia(movie.wikiTitle);
      if (!poster) {
        return null;
      }
      return {
        id: `m${index + 1}`,
        ...movie,
        poster
      };
    })
  );

  movies = resolved.filter(Boolean);
  selectedMovieId = movies[0] ? movies[0].id : "";
  buildMovieSections();
  reservedByShow = Object.fromEntries(
    movies.map((movie, index) => [movie.id, createReservedSet(index + 1)])
  );
}

function renderMovies() {
  movieRows.innerHTML = "";

  if (movieSections.length === 0) {
    const empty = document.createElement("p");
    empty.className = "movie-sub";
    empty.textContent = "No se encontraron peliculas con poster disponible.";
    movieRows.appendChild(empty);
    return;
  }

  movieSections.forEach((section) => {
    const row = document.createElement("section");
    row.className = "movie-row";

    const title = document.createElement("h2");
    title.className = "movie-row-title";
    title.textContent = section.title;
    row.appendChild(title);

    const slider = document.createElement("div");
    slider.className = "movie-slider";

    const prevButton = document.createElement("button");
    prevButton.type = "button";
    prevButton.className = "row-nav prev";
    prevButton.textContent = "<";

    const nextButton = document.createElement("button");
    nextButton.type = "button";
    nextButton.className = "row-nav next";
    nextButton.textContent = ">";

    const track = document.createElement("div");
    track.className = "movie-track";

    section.movieIds.forEach((movieId) => {
      const movie = getMovieById(movieId);
      if (!movie) {
        return;
      }

      const card = document.createElement("article");
      card.className = `movie-card ${movie.id === selectedMovieId ? "active" : ""}`;
      card.title = `${movie.title} | ${movie.time}`;
      card.innerHTML = `
        <div class="movie-poster-wrap">
          <span class="movie-badge">*</span>
          <img src="${movie.poster}" alt="Poster de ${movie.title}" loading="lazy" />
          <p class="movie-release">Estreno</p>
        </div>
        <div class="movie-meta">
          <p class="movie-name ${movie.rating === "C" ? "adult" : ""}">${movie.title}</p>
          <p class="movie-sub">Horario ${movie.time}</p>
          <p class="movie-sub">${formatGTQ(movie.priceGTQ)} / ${formatUSD(movie.priceGTQ / USD_RATE)}</p>
        </div>
      `;

      const image = card.querySelector("img");
      image.addEventListener("error", () => {
        // Si la imagen falla, ocultamos esa tarjeta para no mostrar placeholders.
        card.remove();
      });

      card.addEventListener("click", () => {
        selectedMovieId = movie.id;
        selectedSeats.clear();
        renderMovies();
        renderSeats();
        updateSummary();
        setStatus(`Seleccionaste ${movie.title}.`, false);
      });

      track.appendChild(card);
    });

    prevButton.addEventListener("click", () => {
      track.scrollBy({ left: -track.clientWidth * 0.85, behavior: "smooth" });
    });

    nextButton.addEventListener("click", () => {
      track.scrollBy({ left: track.clientWidth * 0.85, behavior: "smooth" });
    });

    slider.appendChild(prevButton);
    slider.appendChild(track);
    slider.appendChild(nextButton);
    row.appendChild(slider);
    movieRows.appendChild(row);
  });
}

function renderSeats() {
  seatsGrid.innerHTML = "";
  if (!selectedMovieId) {
    return;
  }

  const reservedSet = reservedByShow[selectedMovieId] || new Set();

  seatRows.forEach((rowConfig) => {
    const rowElement = document.createElement("div");
    rowElement.className = "seat-row";

    const rowLabel = document.createElement("span");
    rowLabel.className = "row-label";
    rowLabel.textContent = String(rowConfig.row);
    rowElement.appendChild(rowLabel);

    const seatsWrap = document.createElement("div");
    seatsWrap.className = "row-seats";

    for (let seatNumber = 1; seatNumber <= rowConfig.count; seatNumber += 1) {
      const label = `${rowConfig.row}-${seatNumber}`;
      const seat = document.createElement("button");
      seat.type = "button";
      seat.className = "seat-btn";
      seat.title = label;

      if (reservedSet.has(label)) {
        seat.classList.add("reserved");
        seat.disabled = true;
      } else if (selectedSeats.has(label)) {
        seat.classList.add("selected");
      } else {
        seat.classList.add("available");
      }

      seat.addEventListener("click", () => {
        if (selectedSeats.has(label)) {
          selectedSeats.delete(label);
        } else {
          selectedSeats.add(label);
        }
        renderSeats();
        updateSummary();
      });

      seatsWrap.appendChild(seat);
    }

    rowElement.appendChild(seatsWrap);
    seatsGrid.appendChild(rowElement);
  });
}

function updateSummary() {
  const movie = getCurrentMovie();
  if (!movie) {
    selectedMovieInfo.textContent = "No hay pelicula seleccionada.";
    selectedSeatsText.textContent = "Ninguno";
    totalGTQ.textContent = "Q0.00";
    totalUSD.textContent = "$0.00";
    return;
  }

  const count = selectedSeats.size;
  const total = count * movie.priceGTQ;

  selectedMovieInfo.textContent = `${movie.title} | ${movie.time} | ${formatGTQ(movie.priceGTQ)} por boleto`;
  selectedSeatsText.textContent = count ? Array.from(selectedSeats).join(", ") : "Ninguno";
  totalGTQ.textContent = formatGTQ(total);
  totalUSD.textContent = formatUSD(total / USD_RATE);
}

function setStatus(message, isError = false) {
  statusMessage.textContent = message;
  statusMessage.style.color = isError ? "#c1121f" : "var(--accent-2)";
}

function isPaymentDataValid() {
  const cardName = cardNameInput.value.trim();
  const cardNumber = cardNumberInput.value.replace(/\s+/g, "");
  const cardExp = cardExpInput.value.trim();
  const cardCvv = cardCvvInput.value.trim();
  return !!(cardName && cardNumber.length >= 16 && /^\d{2}\/\d{2}$/.test(cardExp) && cardCvv.length >= 3);
}

function openModal(modal) {
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(modal) {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

paymentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const movie = getCurrentMovie();

  if (!movie) {
    setStatus("No hay pelicula disponible para reservar.", true);
    return;
  }

  if (selectedSeats.size === 0) {
    setStatus("Debes seleccionar al menos un asiento.", true);
    return;
  }

  if (!isPaymentDataValid()) {
    setStatus("Datos de pago invalidos. Revisa tarjeta, fecha y CVV.", true);
    return;
  }

  const seats = Array.from(selectedSeats);
  const total = seats.length * movie.priceGTQ;

  const reservation = {
    id: `R-${reservationCounter}`,
    movieId: movie.id,
    movieTitle: movie.title,
    time: movie.time,
    seats,
    totalGTQ: total,
    totalUSD: total / USD_RATE,
    createdAt: new Date()
  };
  reservationCounter += 1;
  reservations.push(reservation);

  const reservedSet = reservedByShow[selectedMovieId] || new Set();
  seats.forEach((seat) => reservedSet.add(seat));
  reservedByShow[selectedMovieId] = reservedSet;

  selectedSeats.clear();
  renderSeats();
  updateSummary();
  setStatus(`Reserva ${reservation.id} confirmada para ${reservation.movieTitle}.`, false);
  paymentForm.reset();
});

cancelReservationBtn.addEventListener("click", () => {
  if (reservations.length === 0) {
    setStatus("No hay reservas para cancelar.", true);
    return;
  }

  const lastReservation = reservations.pop();
  const reservedSet = reservedByShow[lastReservation.movieId] || new Set();
  lastReservation.seats.forEach((seat) => reservedSet.delete(seat));
  reservedByShow[lastReservation.movieId] = reservedSet;
  if (selectedMovieId === lastReservation.movieId) {
    renderSeats();
  }
  setStatus(`Reserva ${lastReservation.id} cancelada.`, false);
});

downloadTicketBtn.addEventListener("click", () => {
  if (reservations.length === 0) {
    setStatus("No hay reservas para generar boleto.", true);
    return;
  }

  const lastReservation = reservations[reservations.length - 1];
  const movie = getMovieById(lastReservation.movieId);
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  const totalText = `${formatGTQ(lastReservation.totalGTQ)} / ${formatUSD(lastReservation.totalUSD)}`;
  const seatsText = lastReservation.seats.join(", ");
  const seatsLines = doc.splitTextToSize(seatsText, 78);
  const createdAtText = new Date(lastReservation.createdAt).toLocaleString("es-GT");

  // Encabezado del boleto
  doc.setFillColor(12, 22, 48);
  doc.setDrawColor(37, 56, 90);
  doc.roundedRect(margin, 14, contentWidth, 34, 3, 3, "FD");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("SISTEMA DE RESERVA DE CINE", margin + 6, 24);
  doc.setFontSize(22);
  doc.text("E-TICKET", margin + 6, 36);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(`Codigo: ${lastReservation.id}`, pageWidth - margin - 50, 24);
  doc.text("Valido para un ingreso", pageWidth - margin - 50, 31);
  doc.text("Presentar en taquilla", pageWidth - margin - 50, 38);

  // Cuerpo principal
  doc.setTextColor(20, 24, 32);
  doc.setFillColor(248, 249, 252);
  doc.setDrawColor(224, 230, 240);
  doc.roundedRect(margin, 54, contentWidth, 122, 3, 3, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text("DETALLE DE RESERVA", margin + 6, 65);
  doc.setDrawColor(210, 216, 228);
  doc.line(margin + 6, 68, pageWidth - margin - 6, 68);

  doc.setFontSize(10);
  let y = 78;
  const leftX = margin + 6;

  const drawRow = (label, value) => {
    doc.setFont("helvetica", "bold");
    doc.text(`${label}:`, leftX, y);
    doc.setFont("helvetica", "normal");
    doc.text(String(value), leftX + 24, y);
    y += 9;
  };

  drawRow("Reserva", lastReservation.id);
  drawRow("Fecha", createdAtText);
  drawRow("Pelicula", lastReservation.movieTitle);
  drawRow("Categoria", movie?.category || "General");
  drawRow("Horario", lastReservation.time);
  drawRow("Duracion", `${movie?.durationMin || "--"} min`);

  // Panel de asientos y total
  const panelX = pageWidth - margin - 84;
  doc.setFillColor(235, 242, 255);
  doc.setDrawColor(170, 192, 230);
  doc.roundedRect(panelX, 76, 78, 86, 3, 3, "FD");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("ASIENTOS", panelX + 5, 85);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(seatsLines, panelX + 5, 93);

  doc.setFillColor(23, 96, 70);
  doc.roundedRect(panelX + 5, 138, 68, 18, 2, 2, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("TOTAL PAGADO", panelX + 9, 145);
  doc.setFontSize(11);
  doc.text(totalText, panelX + 9, 152);

  // Pie y validacion
  doc.setTextColor(70, 75, 86);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.text("Este boleto es personal e intransferible.", margin + 6, 188);
  doc.text("Conservalo hasta finalizar la funcion.", margin + 6, 193);

  doc.setDrawColor(130, 138, 156);
  for (let x = margin; x < pageWidth - margin; x += 4) {
    doc.line(x, 200, x + 2, 200);
  }
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text("Control de acceso: " + lastReservation.id, margin + 6, 209);

  doc.save(`boleto-${lastReservation.id}.pdf`);
  setStatus(`Boleto ${lastReservation.id} generado en PDF.`, false);
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "Modo Claro" : "Modo Oscuro";
});

themeToggle.textContent = document.body.classList.contains("dark") ? "Modo Claro" : "Modo Oscuro";

cardNumberInput.addEventListener("input", (event) => {
  const clean = event.target.value.replace(/\D/g, "").slice(0, 16);
  event.target.value = clean.replace(/(.{4})/g, "$1 ").trim();
});

cardExpInput.addEventListener("input", (event) => {
  const clean = event.target.value.replace(/\D/g, "").slice(0, 4);
  event.target.value = clean.length >= 3 ? `${clean.slice(0, 2)}/${clean.slice(2)}` : clean;
});

openSeatsModalBtn.addEventListener("click", () => openModal(seatsModal));
openSummaryModalBtn.addEventListener("click", () => openModal(summaryModal));
closeSeatsModalBtn.addEventListener("click", () => closeModal(seatsModal));
closeSummaryModalBtn.addEventListener("click", () => closeModal(summaryModal));

seatsModal.addEventListener("click", (event) => {
  if (event.target === seatsModal) {
    closeModal(seatsModal);
  }
});

summaryModal.addEventListener("click", (event) => {
  if (event.target === summaryModal) {
    closeModal(summaryModal);
  }
});

async function initApp() {
  setStatus("Cargando peliculas con posters reales...", false);
  await loadMoviesWithRealPosters();
  renderMovies();
  renderSeats();
  updateSummary();

  if (movies.length === 0) {
    setStatus("No se pudieron cargar posters reales. Revisa tu conexion a internet.", true);
    return;
  }

  setStatus(`Cartelera lista con ${movies.length} peliculas y posters reales.`, false);
}

initApp();
