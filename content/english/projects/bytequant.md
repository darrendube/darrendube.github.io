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
    background: linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%);
    min-height: 100vh;
    padding: 0 !important;
    margin: 0 !important;
  }

  html.dark main {
    background: linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%);
  }

  html.light main {
    background: linear-gradient(135deg, #ffffff 0%, #f7f7f7 100%);
  }
  
  .dashboard-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 40px;
  }
  
  .portfolio-header {
    text-align: center;
    margin-bottom: 80px;
  }
  
  .portfolio-value {
    font-size: 72px;
    font-weight: 300;
    letter-spacing: -2px;
    color: #ffffff;
    margin: 0;
    line-height: 1;
    transition: all 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  html.light .portfolio-value {
    color: #1a202c;
  }
  
  .portfolio-change {
    font-size: 20px;
    color: #a0aec0;
    margin-top: 16px;
    font-weight: 400;
  }

  html.light .portfolio-change {
    color: #718096;
  }
  
  .portfolio-change.positive {
    color: #48bb78;
  }
  
  .portfolio-change.negative {
    color: #f56565;
  }
  
  .equity-chart-container {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 40px;
    margin-bottom: 80px;
    backdrop-filter: blur(10px);
  }

  html.light .equity-chart-container {
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  #equity-chart {
    width: 100%;
    height: 300px;
  }
  
  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 80px;
  }
  
  .metric-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 24px;
    backdrop-filter: blur(10px);
  }

  html.light .metric-card {
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .metric-label {
    font-size: 12px;
    color: #cbd5e0;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 12px;
    font-weight: 500;
  }

  html.light .metric-label {
    color: #4a5568;
  }
  
  .metric-value {
    font-size: 28px;
    color: #ffffff;
    font-weight: 400;
    letter-spacing: -1px;
  }

  html.light .metric-value {
    color: #1a202c;
  }
  
  .strategies-container {
    margin-bottom: 80px;
  }
  
  .section-title {
    font-size: 14px;
    color: #cbd5e0;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
    font-weight: 500;
  }

  html.light .section-title {
    color: #4a5568;
  }
  
  .strategy-item {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    backdrop-filter: blur(10px);
  }

  html.light .strategy-item {
    background: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .strategy-name {
    color: #ffffff;
    font-weight: 500;
  }

  html.light .strategy-name {
    color: #1a202c;
  }
  
  .strategy-status {
    font-size: 12px;
    color: #48bb78;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .info-section {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 40px;
    color: #a0aec0;
    font-size: 13px;
    line-height: 1.6;
  }

  html.light .info-section {
    border-top-color: rgba(0, 0, 0, 0.1);
    color: #718096;
  }
  
  .info-section h3 {
    color: #cbd5e0;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 12px;
    margin-top: 0;
  }

  html.light .info-section h3 {
    color: #4a5568;
  }
</style>

<div class="dashboard-container">
  <!-- Main Portfolio Value -->
  <div class="portfolio-header">
    <h1 class="portfolio-value" id="portfolio-value">$0</h1>
    <div class="portfolio-change" id="portfolio-change">
      <span id="change-value">+$0</span> (<span id="change-percent">0%</span>)
    </div>
  </div>

  <!-- Equity Curve Chart -->
  <div class="equity-chart-container">
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

<script>
// ==========================================
// API Configuration
// ==========================================
// Update this to point to your ByteQuant API server
// Examples:
//   - Local development: 'http://localhost:5000'
//   - Production with IP: 'http://your-ec2-ip'
//   - Production with domain: 'https://api.yourdomain.com'
const API_BASE = 'http://13.49.158.182'; // CHANGE THIS TO YOUR API URL

// ==========================================
// Dashboard Script
// ==========================================
let equityChart = null;
let lastPortfolioValue = 0;

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
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
      
      changeElement.textContent = formatCurrency(change);
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
    const response = await fetch(`${API_BASE}/api/bytequant/equity-curve`);
    if (!response.ok) throw new Error('Failed to fetch equity curve');
    const data = await response.json();
    
    const timestamps = data.data.map(point => {
      const date = new Date(point.timestamp);
      return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    });
    const values = data.data.map(point => point.total_value);
    
    if (equityChart) {
      equityChart.data.labels = timestamps;
      equityChart.data.datasets[0].data = values;
      equityChart.update('none');
    } else {
      createEquityChart(timestamps, values);
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
        tension: 0.4,
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
          display: false,
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
    fetchPortfolioData(),
    fetchEquityCurve(),
    fetchStrategies()
  ]);
}

updateAllData();
setInterval(updateAllData, 30000);
</script>