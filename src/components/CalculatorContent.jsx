import React from 'react';
import { Calculator, Info, AlertCircle, HelpCircle } from 'lucide-react';

const CalculatorContent = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="w-8 h-8 text-purple-700" />
          <h1 className="text-3xl font-bold text-purple-900 font-[gliroy]">
            Simplify Your Tax Calculation
          </h1>
        </div>
        <p className="text-gray-500 text-lg font-[gliroy]">
          In India, taxpayers can choose between the <span className="text-purple-700">Old Tax Regime </span> and the <span className="text-purple-700">New Tax Regime </span>, both offering different tax rates and benefits. Understanding your tax liability can be complex, but an Income Tax Calculator helps you compare both regimes and make an informed decision.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-6">
          <Info className="w-6 h-6 text-purple-700" />
          <h2 className="text-2xl font-semibold font-[gliroy] text-purple-900">
            Why Use an Income Tax Calculator?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 font-[gliroy]">
          {[
            { title: 'Accurate Tax Estimation', desc: 'Eliminates manual errors' },
            { title: 'Fast & Efficient', desc: 'Get results in seconds' },
            { title: 'Compare Old vs. New Regime', desc: 'See which one benefits you more' },
            { title: 'Better Financial Planning', desc: 'Helps optimize tax-saving investments' }
          ].map((benefit, idx) => (
            <div key={idx} className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-purple-900 font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Updates Section */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-purple-900 mb-4 font-[gliroy]">Latest Budget 2025 Updates</h2>
        <div className="bg-purple-100 border-l-4 border-purple-500 p-4 rounded">
          <p className="text-purple-900 font-medium font-[gliroy]">
            No tax on income up to ₹12 lakh under the new regime.
          </p>
        </div>
      </div>

      {/* Tax Slabs Table */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-purple-900 mb-4 font-[gliroy]">
          Updated Tax Slabs for FY 2025-26 (AY 2026-27):
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-purple-50">
              <tr>
                <th className="px-6 py-3 text-left text-purple-900 font-semibold font-[gliroy]">Income Slab</th>
                <th className="px-6 py-3 text-left text-purple-900 font-semibold font-[gliroy]">Tax Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 font-[gliroy]">
              {[
                ['₹0 - ₹4,00,000', 'Nil'],
                ['₹4,00,001 - ₹8,00,000', '5%'],
                ['₹8,00,001 - ₹12,00,000', '10%'],
                ['₹12,00,001 - ₹16,00,000', '15%'],
                ['₹16,00,001 - ₹20,00,000', '20%'],
                ['₹20,00,001 - ₹24,00,000', '25%'],
                ['₹24,00,001 & above', '30%']
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-purple-50">
                  <td className="px-6 py-4 text-gray-700">{row[0]}</td>
                  <td className="px-6 py-4 text-gray-700">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* How to Use Section */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-purple-900 mb-4 font-[gliroy]">
          How to Use the Income Tax Calculator?
        </h2>
        <div className="space-y-4 font-[gliroy]">
          {[
            'Select the Financial Year (FY) for which you want to calculate tax.',
            'Choose your age category (as tax slabs differ in the old regime).',
            'Enter your gross salary (before deductions like HRA, LTA, etc.).',
            'Add additional income sources (such as interest, rental income, capital gains, or digital assets).',
            'Input tax-saving investments (such as 80C, 80D, NPS, etc.).',
            'Click Calculate to see a detailed comparison of Old vs. New Tax Regime and choose the best option.'
          ].map((step, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-semibold">
                {idx + 1}
              </div>
              <p className="text-gray-700 pt-1">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Example Calculation */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-purple-900 mb-4 font-[gliroy]">
          Example: Tax Calculation for Salary Income
        </h2>
        <p className="text-gray-700 mb-4 font-[gliroy]">
          Case Study: Bikash earns an annual salary of ₹12,00,000. His taxable income breakdown:
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full">
            <thead className="bg-purple-50">
              <tr>
                <th className="px-6 py-3 text-left text-purple-900 font-semibold font-[gliroy]">Income Component</th>
                <th className="px-6 py-3 text-left text-purple-900 font-semibold font-[gliroy]">Old Regime (₹)</th>
                <th className="px-6 py-3 text-left text-purple-900 font-semibold font-[gliroy]">New Regime (₹)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-100 font-[gliroy]">
              {[
                ['Basic Salary', '12,00,000', '12,00,000'],
                ['HRA', '2,40,000 (Exempt)', '6,00,000'],
                ['Special Allowance', '2,52,000', '2,52,000'],
                ['LTA', '8,000', '20,000'],
                ['Standard Deduction', '50,000', '75,000'],
                ['Gross Taxable Income', '15,00,000', '19,42,000']
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-purple-50">
                  <td className="px-6 py-4 text-gray-700">{row[0]}</td>
                  <td className="px-6 py-4 text-gray-700">{row[1]}</td>
                  <td className="px-6 py-4 text-gray-700">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tax Saving Investments */}
        <div className="bg-purple-50 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-purple-900 mb-4 font-[gliroy]">Tax-Saving Investments</h3>
          <div className="grid md:grid-cols-2 gap-4 font-[gliroy]">
            {[
              { title: 'PPF', amount: '₹50,000' },
              { title: 'ELSS', amount: '₹20,000' },
              { title: 'LIC Premium', amount: '₹8,000' },
              { title: 'Medical Insurance (80D)', amount: '₹12,000' },
              { title: 'Savings Interest (80TTA)', amount: '₹8,000' }
            ].map((investment, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-purple-700" />
                <span className="text-gray-700">
                  <span className="font-semibold">{investment.title}</span> – {investment.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Final Calculation */}
        <div className="bg-purple-100 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-purple-900 mb-4 font-[gliroy]">Final Tax Calculation</h3>
          <div className="space-y-3">
            <p className="text-gray-700">
              <span className="font-semibold text-purple-900 font-[gliroy]">Old Regime Tax Payable:</span> ₹2,73,000
            </p>
            <p className="text-gray-700">
              <span className="font-semibold text-purple-900 font-[gliroy]">New Regime Tax Payable:</span> ₹2,83,504
            </p>
          </div>
        </div>

        {/* Regime Comparison */}
        <div className="bg-purple-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-900 mb-4 font-[gliroy]">Old vs. New Tax Regime: Which One to Choose?</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-purple-700 mt-1" />
              <div>
                <span className="font-semibold text-purple-900 font-[gliroy]">Old Regime</span>
                <p className="text-gray-700 font-[gliroy]">Suitable for those who make tax-saving investments.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-purple-700 mt-1" />
              <div>
                <span className="font-semibold text-purple-900 font-[gliroy]">New Regime</span>
                <p className="text-gray-700">Ideal for those who prefer lower tax rates without deductions.</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-700 mt-6 font-[gliroy]">
          Since Bikash has multiple tax-saving investments, the <span className="font-semibold text-purple-900">Old Regime</span> is more beneficial for him. You can also calculate and compare your tax to determine the best option!
        </p>
      </div>

      {/* Additional Info */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <HelpCircle className="w-6 h-6 text-purple-700" />
          <h2 className="text-2xl font-semibold text-purple-900 font-[gliroy]">
            Additional Tax Information
          </h2>
        </div>
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2 font-[gliroy]">Surcharge on High Income</h3>
            <p className="text-gray-700 font-[gliroy]">10% surcharge for income above ₹50 lakh, 25% surcharge for income above ₹2 crore.</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2 font-[gliroy]">Health & Education Cess</h3>
            <p className="text-gray-700 font-[gliroy]">4% extra on total tax payable.</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2 font-[gliroy]">Highest surcharge reduced</h3>
            <p className="text-gray-700 font-[gliroy]">From 37% to 25% under the new regime.</p>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-purple-900 mb-6 font-[gliroy]">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="space-y-4 font-[gliroy]">
          {[
            {
              q: 'Do I need to file an Income Tax Return (ITR)?',
              a: 'Yes, if your income exceeds the basic exemption limit or if you want to claim a refund.'
            },
            {
              q: 'Does the calculator account for TDS?',
              a: 'No, but you can use a TDS Calculator to check your tax deducted at source.'
            },
            {
              q: 'What is the key difference between the Old and New Tax Regime?',
              a: 'The Old Regime allows deductions and exemptions, while the New Regime offers lower tax rates but no exemptions.'
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">{faq.q}</h3>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6">
        <p className="text-lg text-purple-900 font-medium font-[gliroy]">
          Use our Income Tax Calculator today and take control of your tax planning with Tax Hummer! 🚀
        </p>
      </div>
    </div>
  );
};

export default CalculatorContent;