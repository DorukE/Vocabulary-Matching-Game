const wordPools = [
  {
    en: ["apple", "dog", "house", "car", "computer", "phone", "book", "table", "tree", "bird",
         "milk", "bread", "pen", "chair", "window", "sun", "door", "shirt", "pants", "clock",
         "fish", "cat", "ball", "hat", "banana", "orange", "grape", "water", "flower", "cup",
         "key", "bag", "lamp", "bed", "spoon", "fork", "plate", "tv", "radio", "glasses",
         "mirror", "shoe", "sock", "toy", "fan", "wall", "floor", "roof", "mouse", "picture"],
    tr: ["elma", "köpek", "ev", "araba", "bilgisayar", "telefon", "kitap", "masa", "ağaç", "kuş",
         "süt", "ekmek", "kalem", "sandalye", "pencere", "güneş", "kapı", "gömlek", "pantolon", "saat",
         "balık", "kedi", "top", "şapka", "muz", "portakal", "üzüm", "su", "çiçek", "fincan",
         "anahtar", "çanta", "lamba", "yatak", "kaşık", "çatal", "tabak", "televizyon", "radyo", "gözlük",
         "ayna", "ayakkabı", "çorap", "oyuncak", "vantilatör", "duvar", "zemin", "çatı", "fare", "resim"]
  },
  {
    en: ["friend", "love", "school", "game", "water", "food", "music", "movie", "art", "science",
         "teacher", "student", "lesson", "bookstore", "homework", "lunch", "dinner", "family", "garden", "rain",
         "snow", "cloud", "wind", "sunshine", "season", "holiday", "vacation", "trip", "bus", "train",
         "airport", "ticket", "passport", "map", "guide", "language", "word", "sentence", "letter", "email",
         "camera", "photo", "album", "memory", "story", "novel", "writer", "poem", "dream", "hope"],
    tr: ["arkadaş", "aşk", "okul", "oyun", "su", "yemek", "müzik", "film", "sanat", "bilim",
         "öğretmen", "öğrenci", "ders", "kitapçı", "ödev", "öğle yemeği", "akşam yemeği", "aile", "bahçe", "yağmur",
         "kar", "bulut", "rüzgar", "güneş ışığı", "mevsim", "tatil", "izin", "gezi", "otobüs", "tren",
         "havaalanı", "bilet", "pasaport", "harita", "rehber", "dil", "kelime", "cümle", "harf", "e-posta",
         "kamera", "fotoğraf", "albüm", "anı", "hikaye", "roman", "yazar", "şiir", "rüya", "umut"]
  },
  {
    en: ["universe", "technology", "education", "health", "opinion", "adventure", "celebration", "knowledge", "philosophy", "psychology",
         "research", "experiment", "history", "culture", "religion", "society", "politics", "law", "justice", "freedom",
         "independence", "government", "leader", "voting", "community", "development", "progress", "growth", "economy", "finance",
         "bank", "currency", "price", "market", "consumer", "product", "service", "company", "business", "career",
         "goal", "future", "plan", "strategy", "management", "team", "project", "success", "failure", "risk"],
    tr: ["evren", "teknoloji", "eğitim", "sağlık", "görüş", "macera", "kutlama", "bilgi", "felsefe", "psikoloji",
         "araştırma", "deney", "tarih", "kültür", "din", "toplum", "siyaset", "hukuk", "adalet", "özgürlük",
         "bağımsızlık", "hükümet", "lider", "oylama", "topluluk", "gelişim", "ilerleme", "büyüme", "ekonomi", "finans",
         "banka", "para birimi", "fiyat", "pazar", "tüketici", "ürün", "hizmet", "şirket", "iş", "kariyer",
         "hedef", "gelecek", "plan", "strateji", "yönetim", "ekip", "proje", "başarı", "başarısızlık", "risk"]
  },
  {
    en: ["architecture", "economics", "environment", "opportunity", "motivation", "achievement", "perspective", "metamorphosis", "cognition", "ephemeral",
         "infrastructure", "sustainability", "urbanization", "innovation", "automation", "globalization", "negotiation", "mediation", "legislation", "regulation",
         "biodiversity", "ecosystem", "pollution", "climate", "emission", "recycling", "renewable", "conservation", "deforestation", "migration",
         "population", "demographics", "statistics", "analysis", "prediction", "algorithm", "network", "database", "interface", "platform",
         "simulation", "modeling", "prototype", "design", "efficiency", "productivity", "optimization", "iteration", "debugging", "synthesis"],
    tr: ["mimari", "ekonomi", "çevre", "fırsat", "motivasyon", "başarı", "perspektif", "metamorfoz", "biliş", "geçici",
         "altyapı", "sürdürülebilirlik", "kentleşme", "yenilik", "otomasyon", "küreselleşme", "müzakere", "arabuluculuk", "yasama", "düzenleme",
         "biyoçeşitlilik", "ekosistem", "kirlilik", "iklim", "emisyon", "geri dönüşüm", "yenilenebilir", "koruma", "ormanların yok olması", "göç",
         "nüfus", "demografi", "istatistik", "analiz", "tahmin", "algoritma", "ağ", "veritabanı", "arayüz", "platform",
         "benzetim", "modelleme", "prototip", "tasarım", "verimlilik", "üretkenlik", "optimizasyon", "yineleme", "hata ayıklama", "sentez"]
  },
  {
    en: ["ubiquitous", "antagonistic", "juxtapose", "paradigm", "quantitative", "resilience", "conscientious", "effervescent", "equilibrium", "serendipity",
         "transcendence", "idiosyncrasy", "epistemology", "ontology", "heuristic", "synergy", "catalyst", "ambiguous", "empathy", "aesthetic",
         "phenomenon", "rhetoric", "cognition", "existential", "axiomatic", "dialectic", "anomaly", "hermeneutics", "soliloquy", "panacea",
         "reconciliation", "propensity", "elucidate", "conundrum", "epiphany", "ineffable", "numinous", "sublime", "metaphor", "allegory",
         "platitude", "transience", "dichotomy", "lexicon", "semantics", "pragmatics", "syntax", "morphology", "phonology", "etymology"],
    tr: ["her yerde bulunan", "düşmanca", "yan yana koymak", "paradigma", "nicel", "direnç", "vicdanlı", "kabarcıklı", "denge", "tesadüf",
         "aşkınlık", "alışılmışın dışında", "bilgi kuramı", "varlık felsefesi", "sezgisel", "enerji birliği", "tetikleyici", "belirsiz", "empati", "estetik",
         "olgu", "hitabet", "biliş", "varoluşsal", "açık doğru", "diyalektik", "anormallik", "yorumbilim", "iç monolog", "her derde deva",
         "uzlaşma", "eğilim", "açıklığa kavuşturmak", "bilmece", "aydınlanma", "ifade edilemez", "kutsal", "yüce", "metafor", "alegori",
         "boş laf", "geçicilik", "ikilik", "sözlük", "anlambilim", "edimbilim", "sözdizim", "biçimbilim", "sesbilim", "kökenbilim"]
  }
];

let currentLevel = 0;
let score = 0;
let matched = 0;
let firstCard = null;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function getRandomPairs(levelIndex, count = 10) {
  const en = wordPools[levelIndex].en;
  const tr = wordPools[levelIndex].tr;
  const indices = shuffle([...Array(en.length).keys()]).slice(0, count);
  const selected = indices.map(i => ({
    en: en[i],
    tr: tr[i]
  }));
  return selected;
}

function loadLevel(levelIndex) {
  currentLevel = levelIndex;
  score = 0;
  matched = 0;
  firstCard = null;

  document.querySelectorAll('.level').forEach(btn => {
    btn.disabled = true;
  });

  document.getElementById('score').textContent = score;
  document.getElementById('progress').value = 0;
  document.getElementById('progress-count').textContent = "0/10";

  const selectedPairs = getRandomPairs(levelIndex);
  renderCards(selectedPairs);
}

function renderCards(pairs) {
  const gameBoard = document.getElementById("game-board");
  gameBoard.innerHTML = "";

  const words = [
    ...pairs.map((pair, i) => ({ text: pair.en, pair: i, lang: 'en' })),
    ...pairs.map((pair, i) => ({ text: pair.tr, pair: i, lang: 'tr' }))
  ];

  shuffle(words).forEach(word => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = word.text;
    card.dataset.pair = word.pair;
    card.dataset.lang = word.lang;
    card.onclick = () => handleCardClick(card);
    gameBoard.appendChild(card);
  });
}

function handleCardClick(card) {
  if (card.classList.contains("matched") || card === firstCard) return;

  if (!firstCard) {
    firstCard = card;
    card.style.background = "#e0e7ff";
    return;
  }

  if (card.dataset.pair === firstCard.dataset.pair) {
    card.classList.add("matched");
    firstCard.classList.add("matched");
    score++;
    matched++;
    document.getElementById("score").textContent = score;
    document.getElementById("progress").value = matched;
    document.getElementById("progress-count").textContent = matched + "/10";

    if (matched === 10) {
      setTimeout(() => {
        if (currentLevel + 1 < wordPools.length) {
          currentLevel++;
          loadLevel(currentLevel);
        } else {
          alert("Tebrikler! Tüm seviyeleri bitirdiniz.");
        }
      }, 1000);
    }
  } else {
    card.style.background = "#fee2e2";
    firstCard.style.background = "#fee2e2";
    setTimeout(() => {
      card.style.background = "";
      firstCard.style.background = "";
    }, 700);
  }

  firstCard = null;
}

function resetLevel() {
  loadLevel(currentLevel);
}

window.onload = () => loadLevel(0);