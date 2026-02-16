# Python Dashboard Code (Streamlit)

```python
import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go

st.set_page_config(page_title="KPI Dashboard", layout="wide")

# Header with date filter
col1, col2 = st.columns([3, 1])
with col1:
    st.title("Executive Dashboard")
with col2:
    date_range = st.selectbox(
        "Period",
        ["Last 7 Days", "Last 30 Days", "Last Quarter", "YTD"]
    )

# KPI Cards
def metric_card(label, value, delta, prefix="", suffix=""):
    delta_color = "green" if delta >= 0 else "red"
    delta_arrow = "▲" if delta >= 0 else "▼"
    st.metric(
        label=label,
        value=f"{prefix}{value:,.0f}{suffix}",
        delta=f"{delta_arrow} {abs(delta):.1f}%"
    )

col1, col2, col3, col4 = st.columns(4)
with col1:
    metric_card("Revenue", 2400000, 12.5, prefix="$")
with col2:
    metric_card("Customers", 12450, 15.2)
with col3:
    metric_card("NPS Score", 72, 5.0)
with col4:
    metric_card("Churn Rate", 4.2, -0.8, suffix="%")

# Charts
col1, col2 = st.columns(2)

with col1:
    st.subheader("Revenue Trend")
    revenue_data = pd.DataFrame({
        'Month': pd.date_range('2024-01-01', periods=12, freq='M'),
        'Revenue': [180000, 195000, 210000, 225000, 240000, 255000,
                    270000, 285000, 300000, 315000, 330000, 345000]
    })
    fig = px.line(revenue_data, x='Month', y='Revenue',
                  line_shape='spline', markers=True)
    fig.update_layout(height=300)
    st.plotly_chart(fig, use_container_width=True)

with col2:
    st.subheader("Revenue by Product")
    product_data = pd.DataFrame({
        'Product': ['Enterprise', 'Professional', 'Starter', 'Other'],
        'Revenue': [45, 32, 18, 5]
    })
    fig = px.pie(product_data, values='Revenue', names='Product',
                 hole=0.4)
    fig.update_layout(height=300)
    st.plotly_chart(fig, use_container_width=True)

# Cohort Heatmap
st.subheader("Cohort Retention")
cohort_data = pd.DataFrame({
    'Cohort': ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    'M0': [100, 100, 100, 100, 100],
    'M1': [85, 87, 84, 86, 88],
    'M2': [78, 80, 76, 79, None],
    'M3': [72, 74, 70, None, None],
    'M4': [68, 70, None, None, None],
})
fig = go.Figure(data=go.Heatmap(
    z=cohort_data.iloc[:, 1:].values,
    x=['M0', 'M1', 'M2', 'M3', 'M4'],
    y=cohort_data['Cohort'],
    colorscale='Blues',
    text=cohort_data.iloc[:, 1:].values,
    texttemplate='%{text}%',
    textfont={"size": 12},
))
fig.update_layout(height=250)
st.plotly_chart(fig, use_container_width=True)

# Alerts Section
st.subheader("Alerts")
alerts = [
    {"level": "error", "message": "Churn rate exceeded threshold (>5%)"},
    {"level": "warning", "message": "Support ticket volume 20% above average"},
]
for alert in alerts:
    if alert["level"] == "error":
        st.error(f"🔴 {alert['message']}")
    elif alert["level"] == "warning":
        st.warning(f"🟡 {alert['message']}")
```

## Best Practices