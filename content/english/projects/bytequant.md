---
title: "ByteQuant"
meta_title: "ByteQuant Dashboard"
description: "Autonomous Trading Engine Dashboard"
date: 2024-04-26
draft: false
noHeader: true
---

<style>
  /* Override theme styles for sleek dashboard */
  main {
    background: linear-gradient(135deg, #ffffff 0%, #f7f7f7 100%);
    min-height: 100vh;
    padding: 0 !important;
    margin: 0 !important;
  }

  .dark main,
  html.dark main,
  body.dark main,
  [data-theme="dark"] main,
  .theme-dark main {
    background: linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%);
  }

  .dashboard-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 40px 40px;
  }
  
  .portfolio-header {
    display: flex;
    gap: 60px;
    align-items: flex-start;
    margin-bottom: 60px;
  }

  @media (max-width: 768px) {
    .portfolio-header {
      flex-direction: column;
      gap: 40px;
    }
  }

  .portfolio-left {
    flex: 0 0 40%;
    text-align: left;
  }

  @media (max-width: 768px) {
    .portfolio-left {
      flex: 1 1 auto;
      text-align: center;
    }
  }

  .portfolio-label {
    font-size: 12px;
    color: #718096;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 16px;
    font-weight: 500;
  }

  .dark .portfolio-label,
  html.dark .portfolio-label,
  body.dark .portfolio-label,
  [data-theme="dark"] .portfolio-label,
  .theme-dark .portfolio-label {
    color: #a0aec0;
  }
  
  .portfolio-value {
    font-size: 56px;
    font-weight: 400;
    letter-spacing: -2px;
    color: #1a202c;
    margin: 0 0 12px 0;
    line-height: 1;
    transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .dark .portfolio-value,
  html.dark .portfolio-value,
  body.dark .portfolio-value,
  [data-theme="dark"] .portfolio-value,
  .theme-dark .portfolio-value {
    color: #ffffff;
  }
  
  .portfolio-change {
    font-size: 15px;
    color: #718096;
    margin: 0;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .arrow-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    font-weight: bold;
  }

  .dark .portfolio-change,
  html.dark .portfolio-change,
  body.dark .portfolio-change,
  [data-theme="dark"] .portfolio-change,
  .theme-dark .portfolio-change {
    color: #a0aec0;
  }
  
  .portfolio-change.positive {
    color: #48bb78;
  }
  
  .portfolio-change.negative {
    color: #f56565;
  }
  
  .equity-chart-container {
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 40px;
    margin-bottom: 80px;
    backdrop-filter: blur(10px);
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .portfolio-header .equity-chart-container {
    margin-bottom: 0;
    flex: 1;
  }

  .dark .equity-chart-container,
  html.dark .equity-chart-container,
  body.dark .equity-chart-container,
  [data-theme="dark"] .equity-chart-container,
  .theme-dark .equity-chart-container {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .range-controls {
    display: inline-flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 24px;
  }

  .range-controls button {
    border: 1px solid rgba(0, 0, 0, 0.08);
    background: rgba(0, 0, 0, 0.04);
    color: #4a5568;
    padding: 10px 16px;
    border-radius: 999px;
    font-size: 13px;
    cursor: pointer;
    transition: all 200ms ease;
  }

  .range-controls button.active {
    background: rgba(72, 187, 120, 0.14);
    border-color: rgba(72, 187, 120, 0.35);
    color: #1a202c;
  }

  .dark .range-controls button,
  html.dark .range-controls button,
  body.dark .range-controls button,
  [data-theme="dark"] .range-controls button,
  .theme-dark .range-controls button {
    border-color: rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.04);
    color: #cbd5e0;
  }

  .dark .range-controls button.active,
  html.dark .range-controls button.active,
  body.dark .range-controls button.active,
  [data-theme="dark"] .range-controls button.active,
  .theme-dark .range-controls button.active {
    background: rgba(72, 187, 120, 0.14);
    border-color: rgba(72, 187, 120, 0.35);
    color: #ffffff;
  }

  #equity-chart {
    width: 100%;
    height: 340px;
    max-height: 340px;
    display: block;
  }

  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 80px;
  }

  .dashboard-branding {
    flex: 1;
  }

  .dashboard-logo-text {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-bottom: 12px;
  }

  .dashboard-title {
    font-size: 28px;
    font-weight: 600;
    color: #1a202c;
    margin: 0;
    letter-spacing: -1px;
  }

  .dark .dashboard-title,
  html.dark .dashboard-title,
  body.dark .dashboard-title,
  [data-theme="dark"] .dashboard-title,
  .theme-dark .dashboard-title {
    color: #ffffff;
  }

  .dashboard-subtitle {
    font-size: 13px;
    color: #1a202c;
    margin: 0;
    font-weight: 400;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  .dark .dashboard-subtitle,
  html.dark .dashboard-subtitle,
  body.dark .dashboard-subtitle,
  [data-theme="dark"] .dashboard-subtitle,
  .theme-dark .dashboard-subtitle {
    color: #ffffff;
  }

  .dashboard-controls {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .status-indicator {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(0, 0, 0, 0.08);
    font-size: 12px;
    color: #4a5568;
    font-weight: 500;
  }

  .dark .status-indicator,
  html.dark .status-indicator,
  body.dark .status-indicator,
  [data-theme="dark"] .status-indicator,
  .theme-dark .status-indicator {
    background: rgba(255, 255, 255, 0.02);
    border-color: rgba(255, 255, 255, 0.08);
    color: #cbd5e0;
  }

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #f56565;
    animation: pulse 2s infinite;
  }

  .status-dot.healthy {
    background: #48bb78;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .github-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background: rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.08);
    text-decoration: none;
    color: #4a5568;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 500;
    transition: all 200ms ease;
    cursor: pointer;
  }

  .github-button:hover {
    background: rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.15);
  }

  .dark .github-button,
  html.dark .github-button,
  body.dark .github-button,
  [data-theme="dark"] .github-button,
  .theme-dark .github-button {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(255, 255, 255, 0.08);
    color: #cbd5e0;
  }

  .dark .github-button:hover,
  html.dark .github-button:hover,
  body.dark .github-button:hover,
  [data-theme="dark"] .github-button:hover,
  .theme-dark .github-button:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 80px;
  }
  
  .metric-card {
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 24px;
    backdrop-filter: blur(10px);
  }

  .dark .metric-card,
  html.dark .metric-card,
  body.dark .metric-card,
  [data-theme="dark"] .metric-card,
  .theme-dark .metric-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .metric-label {
    font-size: 12px;
    color: #4a5568;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 12px;
    font-weight: 500;
  }

  .dark .metric-label,
  html.dark .metric-label,
  body.dark .metric-label,
  [data-theme="dark"] .metric-label,
  .theme-dark .metric-label {
    color: #cbd5e0;
  }
  
  .metric-value {
    font-size: 28px;
    color: #1a202c;
    font-weight: 400;
    letter-spacing: -1px;
  }

  .dark .metric-value,
  html.dark .metric-value,
  body.dark .metric-value,
  [data-theme="dark"] .metric-value,
  .theme-dark .metric-value {
    color: #ffffff;
  }
  
  .strategies-container {
    margin-bottom: 80px;
  }
  
  .section-title {
    font-size: 14px;
    color: #4a5568;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
    font-weight: 500;
  }

  .dark .section-title,
  html.dark .section-title,
  body.dark .section-title,
  [data-theme="dark"] .section-title,
  .theme-dark .section-title {
    color: #cbd5e0;
  }
  
  .strategy-item {
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    backdrop-filter: blur(10px);
  }

  .dark .strategy-item,
  html.dark .strategy-item,
  body.dark .strategy-item,
  [data-theme="dark"] .strategy-item,
  .theme-dark .strategy-item {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .strategy-name {
    color: #1a202c;
    font-weight: 500;
  }

  .dark .strategy-name,
  html.dark .strategy-name,
  body.dark .strategy-name,
  [data-theme="dark"] .strategy-name,
  .theme-dark .strategy-name {
    color: #ffffff;
  }
  
  .strategy-status {
    font-size: 12px;
    color: #48bb78;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .info-section {
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 40px;
    color: #718096;
    font-size: 13px;
    line-height: 1.8;
    backdrop-filter: blur(10px);
  }

  .dark .info-section,
  html.dark .info-section,
  body.dark .info-section,
  [data-theme="dark"] .info-section,
  .theme-dark .info-section {
    background: rgba(255, 255, 255, 0.02);
    border-color: rgba(255, 255, 255, 0.1);
    color: #a0aec0;
  }
  
  .info-section h3 {
    color: #1a202c;
    font-size: 16px;
    font-weight: 600;
    text-transform: none;
    letter-spacing: 0;
    margin-bottom: 20px;
    margin-top: 0;
  }

  .dark .info-section h3,
  html.dark .info-section h3,
  body.dark .info-section h3,
  [data-theme="dark"] .info-section h3,
  .theme-dark .info-section h3 {
    color: #ffffff;
  }
</style>

<div class="dashboard-container">
  <!-- Header with Branding & Controls -->
  <div class="dashboard-header">
    <div class="dashboard-branding">
      <div class="dashboard-logo-text">
        <h1 class="dashboard-title">ByteQuant</h1>
      </div>
      <p class="dashboard-subtitle">by Darren Dube</p>
    </div>
    <div class="dashboard-controls">
      <div class="status-indicator">
        <span class="status-dot" id="status-dot"></span>
        <span id="status-text">Connecting...</span>
      </div>
      <a href="https://github.com/darrendube/bytequant.git" class="github-button" target="_blank" rel="noopener">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        Repository
      </a>
    </div>
  </div>

  <!-- Main Portfolio Value -->
  <div class="portfolio-header">
    <div class="portfolio-left">
      <div class="portfolio-label">Portfolio Value</div>
      <h1 class="portfolio-value" id="portfolio-value">$0</h1>
      <div class="portfolio-change" id="portfolio-change">
        <span class="arrow-icon" id="change-arrow">▲</span>
        <span id="change-value">+$0</span> (<span id="change-percent">0%</span>)
      </div>
    </div>

  <!-- Equity Curve Chart -->
  <div class="equity-chart-container">
    <div class="range-controls" id="range-controls"></div>
    <canvas id="equity-chart"></canvas>
  </div>

  <!-- Key Metrics -->
  <div class="metrics-grid">
    <div class="metric-card">
      <div class="metric-label">Cash Balance</div>
      <div class="metric-value" id="cash-value">$0</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Active Positions</div>
      <div class="metric-value" id="positions-count">0</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">Account Status</div>
      <div class="metric-value" id="account-status" style="font-size: 16px;">--</div>
    </div>
  </div>

  <!-- Active Strategies -->
  <div class="strategies-container">
    <div class="section-title">Active Strategies</div>
    <div id="strategies"></div>
  </div>

  <!-- Project Info -->
  <div class="info-section">
    <h3>About ByteQuant</h3>
    <p>Autonomous trading engine designed to identify and exploit statistical arbitrage opportunities in US equities. The system operates through four specialized layers: Data → Updates market data | Strategy → Generates signals | Risk → Applies controls | Execution → Sends orders</p>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns@2.0.0/dist/chartjs-adapter-date-fns.bundle.min.js"></script>

<script>
// ==========================================
// API Configuration
// ==========================================
// Update this to point to your ByteQuant API server
// Examples:
//   - Local development: 'http://localhost:5000'
//   - Production with domain: 'https://api.yourdomain.com'
//   - Production with IP over HTTPS: 'https://13.49.158.182'
const rawApiBase = 'https://item-estimated-accepted-collapse.trycloudflare.com'; // CHANGE THIS TO YOUR API URL
const API_BASE = window.location.protocol === 'https:' && rawApiBase.startsWith('http:')
  ? rawApiBase.replace(/^http:/, 'https:')
  : rawApiBase;

// ==========================================
// Dashboard Script
// ==========================================
let equityChart = null;
let lastPortfolioValue = 0;
let selectedRange = '30d';
let apiHealthy = false;
const rangeOptions = [
  { label: '1D', value: '1d', days: 1 },
  { label: '1W', value: '7d', days: 7 },
  { label: '1M', value: '30d', days: 30 },
  { label: 'YTD', value: 'ytd', days: null },
  { label: 'ALL', value: 'all', days: null }
];

async function checkApiHealth() {
  try {
    const response = await fetch(`${API_BASE}/health`, { signal: AbortSignal.timeout(5000) });
    apiHealthy = response.ok;
  } catch (error) {
    apiHealthy = false;
  }
  updateStatusIndicator();
}

function updateStatusIndicator() {
  const statusDot = document.getElementById('status-dot');
  const statusText = document.getElementById('status-text');
  
  if (apiHealthy) {
    statusDot.classList.add('healthy');
    statusText.textContent = 'API Connected';
  } else {
    statusDot.classList.remove('healthy');
    statusText.textContent = 'API Disconnected';
  }
}

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
}

function formatLabel(timestamp) {
  const date = new Date(timestamp);
  if (selectedRange === '1d') {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  }
  if (selectedRange === '7d' || selectedRange === '30d') {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function renderRangeButtons() {
  const rangeControls = document.getElementById('range-controls');
  rangeControls.innerHTML = rangeOptions.map(option => `
    <button type="button" class="range-button${option.value === selectedRange ? ' active' : ''}" data-range="${option.value}">
      ${option.label}
    </button>
  `).join('');

  rangeControls.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      selectedRange = button.dataset.range;
      renderRangeButtons();
      fetchEquityCurve();
    });
  });
}

function animateCounter(element, endValue, duration = 600) {
  const startValue = parseFloat(element.textContent.replace(/[$,]/g, '')) || 0;
  const startTime = Date.now();
  
  function update() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = startValue + (endValue - startValue) * progress;
    element.textContent = formatCurrency(value);
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  update();
}

async function fetchPortfolioData() {
  try {
    const response = await fetch(`${API_BASE}/api/bytequant/portfolio`);
    if (!response.ok) throw new Error('Failed to fetch portfolio');
    const data = await response.json();
    
    const portfolioElement = document.getElementById('portfolio-value');
    animateCounter(portfolioElement, data.total_value);
    
    const changeElement = document.getElementById('change-value');
    const percentElement = document.getElementById('change-percent');
    const changeContainer = document.getElementById('portfolio-change');
    
    if (lastPortfolioValue > 0) {
      const change = data.total_value - lastPortfolioValue;
      const changePercent = (change / lastPortfolioValue) * 100;
      
      const arrowElement = document.getElementById('change-arrow');
      arrowElement.textContent = change >= 0 ? '▲' : '▼';
      
      changeElement.textContent = (change >= 0 ? '+' : '') + formatCurrency(Math.abs(change));
      percentElement.textContent = changePercent.toFixed(2) + '%';
      
      changeContainer.classList.remove('positive', 'negative');
      changeContainer.classList.add(change >= 0 ? 'positive' : 'negative');
    }
    
    lastPortfolioValue = data.total_value;
    
    document.getElementById('cash-value').textContent = formatCurrency(data.cash);
    document.getElementById('positions-count').textContent = data.positions_count || 0;
    document.getElementById('account-status').textContent = (data.account_status || 'active').toUpperCase();
    
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
  }
}

async function fetchEquityCurve() {
  try {
    const option = rangeOptions.find(option => option.value === selectedRange) || rangeOptions[2];
    let url = `${API_BASE}/api/bytequant/equity-curve`;
    if (option.value === 'ytd') {
      const now = new Date();
      const startOfYear = new Date(now.getFullYear(), 0, 1);
      const days = Math.ceil((now - startOfYear) / (1000 * 60 * 60 * 24));
      url += `?days=${days}`;
    } else if (option.value !== 'all') {
      url += `?days=${option.days}`;
    }

    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch equity curve');
    const data = await response.json();
    
    // Sort data by timestamp
    data.data.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    
    // Determine date range
    const endDate = new Date();
    let startDate;
    if (option.value === '1d') {
      startDate = new Date(endDate);
      startDate.setHours(0, 0, 0, 0);
    } else if (option.days) {
      startDate = new Date(endDate);
      startDate.setDate(endDate.getDate() - option.days);
    } else if (option.value === 'ytd') {
      startDate = new Date(endDate.getFullYear(), 0, 1);
    } else {
      // 'all' - find earliest date
      startDate = new Date(Math.min(...data.data.map(p => new Date(p.timestamp))));
    }
    
    // Generate all dates in range
    const dates = [];
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      if (option.value === '1d') {
        currentDate.setHours(currentDate.getHours() + 1); // hourly for 1d
      } else {
        currentDate.setDate(currentDate.getDate() + 1); // daily otherwise
      }
    }
    
    // Fill values: for each date, use the last known value
    const values = [];
    let lastValue = data.data.length > 0 ? data.data[0].total_value : 0;
    let dataIndex = 0;
    
    for (const date of dates) {
      // Find the most recent data point before or on this date
      while (dataIndex < data.data.length && new Date(data.data[dataIndex].timestamp) <= date) {
        lastValue = data.data[dataIndex].total_value;
        dataIndex++;
      }
      values.push(lastValue);
    }
    
    if (equityChart) {
      equityChart.data.labels = dates;
      equityChart.data.datasets[0].data = values;
      equityChart.update('none');
    } else {
      createEquityChart(dates, values);
    }
    
  } catch (error) {
    console.error('Error fetching equity curve:', error);
  }
}

function createEquityChart(timestamps, values) {
  const ctx = document.getElementById('equity-chart').getContext('2d');
  
  equityChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: timestamps,
      datasets: [{
        label: 'Portfolio Value',
        data: values,
        borderColor: '#48bb78',
        backgroundColor: 'rgba(72, 187, 120, 0.05)',
        borderWidth: 2,
        fill: true,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointBackgroundColor: '#48bb78'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#ffffff',
          bodyColor: '#a0aec0',
          borderColor: 'rgba(72, 187, 120, 0.3)',
          borderWidth: 1,
          padding: 12,
          displayColors: false,
          callbacks: {
            label: function(context) {
              return formatCurrency(context.parsed.y);
            }
          }
        }
      },
      scales: {
        x: {
          type: 'time',
          time: {
            unit: selectedRange === '1d' ? 'hour' : 'day',
            displayFormats: {
              hour: 'HH:mm',
              day: 'MMM dd'
            }
          },
          grid: {
            display: false
          }
        },
        y: {
          display: false,
          grid: {
            display: false
          }
        }
      }
    }
  });
}

async function fetchStrategies() {
  try {
    const response = await fetch(`${API_BASE}/api/bytequant/strategies`);
    if (!response.ok) throw new Error('Failed to fetch strategies');
    const strategies = await response.json();
    
    const strategiesDiv = document.getElementById('strategies');
    
    if (strategies.data.length === 0) {
      strategiesDiv.innerHTML = '<div style="color: #a0aec0; font-size: 14px;">No active strategies</div>';
      return;
    }
    
    strategiesDiv.innerHTML = strategies.data.map(strategy => `
      <div class="strategy-item">
        <span class="strategy-name">${strategy.name}</span>
        <span class="strategy-status">${strategy.status}</span>
      </div>
    `).join('');
    
  } catch (error) {
    console.error('Error fetching strategies:', error);
  }
}

async function updateAllData() {
  await Promise.all([
    checkApiHealth(),
    fetchPortfolioData(),
    fetchEquityCurve(),
    fetchStrategies()
  ]);
}

renderRangeButtons();
checkApiHealth();
updateAllData();
setInterval(updateAllData, 30000);
setInterval(checkApiHealth, 10000);
</script>