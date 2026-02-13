const spend = process.argv[2] || 1000;
const conversion = process.argv[3] || 2; // 2%
const revenuePerSale = process.argv[4] || 50;

console.log(`📈 (Node.js) Conversion & ROI Calculator`);
console.log(`   - Spend: $${spend}`);
console.log(`   - Conversion Rate: ${conversion}%`);
const sales = (spend / 1) * (conversion / 100); // Assuming $1 CPC for demo
console.log(`   - Estimated Sales: ${sales.toFixed(0)}`);
console.log(`   - Total Revenue: $${(sales * revenuePerSale).toFixed(2)}`);
console.log(`   - ROAS: ${((sales * revenuePerSale) / spend).toFixed(2)}x`);
