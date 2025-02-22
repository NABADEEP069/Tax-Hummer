import { useState } from "react"
import { BarChart, Bar, YAxis, ResponsiveContainer, Cell } from "recharts"
import { Info } from "lucide-react"

const InfoTooltip = ({ content }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false)

  const handleTouchStart = () => {
    setTooltipVisible(true)
  }

  const handleTouchEnd = () => {
    setTooltipVisible(false)
  }

  const handleMouseEnter = () => {
    setTooltipVisible(true)
  }

  const handleMouseLeave = () => {
    setTooltipVisible(false)
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Info className="h-4 w-4 text-gray-400 cursor-pointer" />
      {isTooltipVisible && (
        <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full w-64 opacity-100 transition-opacity">
          <div className="flex items-center justify-center">
            <div className="bg-black text-white text-sm rounded-lg py-2 px-3">{content}</div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-full">
            <div className="w-2 h-2 bg-black rotate-45" />
          </div>
        </div>
      )}
    </div>
  )
}

const getTooltipContent = (field) => {
  const tooltips = {
    salary: "Your total annual salary (CTC). In Old Regime, exemptions like HRA/LTA are deducted from this.",
    exemptAllowances: "Exemptions such as HRA, LTA, etc. (Deducted only in Old Regime).",
    interestIncome: "Interest earned from savings, fixed deposits, etc.",
    homeLoanSelfOccupied: "Interest on home loan for self-occupied property",
    rentalIncome: "Income from renting out property",
    homeLoanLetOut: "Interest on home loan for let-out property",
    digitalAssets: "Income from transfer of virtual digital assets",
    otherIncome: "Any other taxable income",
    // Deductions tooltips
    basic80C: "Investments/expenses under Section 80C (PPF, ELSS, etc.)",
    deposits80TTA: "Interest earned from savings account",
    medical80D: "Medical insurance premium for self and family",
    donations80G: "Donations to approved charities",
    housing80EEA: "Additional home loan interest deduction",
    nps80CCD: "Contribution to National Pension System (80CCD(1))",
    nps80CCD2: "Employer's contribution to NPS",
    otherDeduction: "Other eligible deductions under Chapter VI-A",
  }
  return tooltips[field] || "Enter details here"
}

const TaxCalculator = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [showDashboard, setShowDashboard] = useState(false)
  const [formData, setFormData] = useState({
    financialYear: "FY 2025-2026", // or "FY 2024-2025"
    ageGroup: "0-60",
    incomeDetails: {
      salary: 0,
      exemptAllowances: 0,
      interestIncome: 0,
      homeLoanSelfOccupied: 0,
      rentalIncome: 0,
      homeLoanLetOut: 0,
      digitalAssets: 0,
      otherIncome: 0,
    },
    deductions: {
      basic80C: 0,
      deposits80TTA: 0,
      medical80D: 0,
      donations80G: 0,
      housing80EEA: 0,
      nps80CCD: 0,
      nps80CCD2: 0,
      otherDeduction: 0,
    },
  })

  const [taxResults, setTaxResults] = useState({
    totalIncome: 0,
    exemptAllowances: 0,
    standardDeduction: 0,
    chapterVIA: 0,
    taxableIncome: 0,
    taxPayable: 0,
    incomeTax: 0,
    surcharge: 0,
    healthEducationCess: 0,
  })

  const [selectedRegime, setSelectedRegime] = useState("new")

  // Calculate Total Income
  // For Old Regime: Deduct exemptAllowances from salary before adding other income sources.
  const calculateTotalIncome = () => {
    const income = formData.incomeDetails
    let salary = Number(income.salary) || 0
    let exemptAllowances = Number(income.exemptAllowances) || 0
    let otherIncome =
      (Number(income.interestIncome) || 0) +
      (Number(income.homeLoanSelfOccupied) || 0) +
      (Number(income.rentalIncome) || 0) +
      (Number(income.homeLoanLetOut) || 0) +
      (Number(income.digitalAssets) || 0) +
      (Number(income.otherIncome) || 0)

    if (selectedRegime === "old") {
      salary = salary - exemptAllowances
    }
    return salary + otherIncome
  }

  // Calculate Deductions (Standard Deduction + Chapter VI-A for Old Regime)
  const calculateDeductions = () => {
    if (selectedRegime === "new") {
      // For New Regime, standard deduction depends on the financial year.
      if (formData.financialYear === "FY 2025-2026") {
        return 75000
      }
      return 50000
    }
    // For Old Regime, standard deduction is fixed at ₹50,000 plus Chapter VI-A deductions.
    const chapterVIA = Object.values(formData.deductions).reduce(
      (a, b) => a + (Number(b) || 0),
      0
    )
    return 50000 + chapterVIA
  }

  // Compute Tax Using Slab-wise Calculation and Apply Rebate if Applicable
  const calculateTax = (taxableIncome) => {
    let tax = 0
    let rebate = 0

    if (selectedRegime === "new") {
      // New Regime Slab Rates (applies for both FYs; only standard deduction and rebate thresholds change)
      if (taxableIncome <= 300000) {
        tax = 0
      } else if (taxableIncome <= 600000) {
        tax = (taxableIncome - 300000) * 0.05
      } else if (taxableIncome <= 900000) {
        tax = 15000 + (taxableIncome - 600000) * 0.1
      } else if (taxableIncome <= 1200000) {
        tax = 45000 + (taxableIncome - 900000) * 0.15
      } else if (taxableIncome <= 1500000) {
        tax = 90000 + (taxableIncome - 1200000) * 0.2
      } else {
        tax = 150000 + (taxableIncome - 1500000) * 0.3
      }
      // Apply rebate under Section 87A for New Regime
      if (formData.financialYear === "FY 2024-2025" && taxableIncome <= 700000) {
        rebate = tax // Fully rebate tax if taxable income is within threshold
      } else if (
        formData.financialYear === "FY 2025-2026" &&
        taxableIncome <= 1200000
      ) {
        rebate = tax // New Regime gets full rebate under FY 2025-26 if within threshold
      }
    } else {
      // Old Regime Slab Rates
      if (taxableIncome <= 250000) {
        tax = 0
      } else if (taxableIncome <= 500000) {
        tax = (taxableIncome - 250000) * 0.05
      } else if (taxableIncome <= 1000000) {
        tax = 12500 + (taxableIncome - 500000) * 0.2
      } else {
        tax = 112500 + (taxableIncome - 1000000) * 0.3
      }
      // Apply rebate for Old Regime for FY 2024-2025 only
      if (formData.financialYear === "FY 2024-2025" && taxableIncome <= 500000) {
        rebate = tax
      }
      // For FY 2025-2026 in Old Regime, assume no rebate as per final comparison.
    }

    const taxAfterRebate = tax - rebate
    return taxAfterRebate > 0 ? taxAfterRebate : 0
  }

  const handleCalculate = () => {
    const totalIncome = calculateTotalIncome()
    const totalDeductions = calculateDeductions()
    // Taxable Income = Gross Income – Standard Deduction (and other exemptions/deductions)
    const taxableIncome = Math.max(0, totalIncome - totalDeductions)
    const incomeTax = calculateTax(taxableIncome)
    const healthEducationCess = Math.round(incomeTax * 0.04)
    const finalTax = incomeTax + healthEducationCess

    setTaxResults({
      totalIncome,
      // For display purposes, show exempt allowances only in New Regime (not deducted)
      exemptAllowances:
        selectedRegime === "new"
          ? Number(formData.incomeDetails.exemptAllowances)
          : 0,
      standardDeduction:
        selectedRegime === "new"
          ? formData.financialYear === "FY 2025-2026"
            ? 75000
            : 50000
          : 50000,
      // For Old Regime, chapter VIA deductions are the extra beyond the standard ₹50,000.
      chapterVIA:
        selectedRegime === "old"
          ? calculateDeductions() - 50000
          : 0,
      taxableIncome,
      taxPayable: finalTax,
      incomeTax,
      surcharge: 0,
      healthEducationCess,
    })

    setShowDashboard(true)
  }

  const handleInputChange = (category, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value,
      },
    }))
  }

  const tabs = ["Basic Details", "Income Details", "Deductions"]

  const formatDeductionLabel = (key) => {
    switch (key) {
      case "basic80C":
        return "Basic - 80C"
      case "deposits80TTA":
        return "Deposits - 80TTA"
      case "medical80D":
        return "Medical - 80D"
      case "donations80G":
        return "Donations - 80G"
      case "housing80EEA":
        return "Housing - 80EEA"
      case "nps80CCD":
        return "NPS - 80CCD"
      case "nps80CCD2":
        return "NPS - 80CCD(2)"
      case "otherDeduction":
        return "Other Deduction"
      default:
        return key
    }
  }

  const formatIncomeDetailsLabel = (key) => {
    switch (key) {
      case "salary":
        return "Income from Salary"
      case "exemptAllowances":
        return "Exempt Allowances"
      case "interestIncome":
        return "Income from Interest"
      case "homeLoanSelfOccupied":
        return "Interest on Home Loan (Self-Occupied)"
      case "rentalIncome":
        return "Rental Income"
      case "homeLoanLetOut":
        return "Interest on Home Loan (Let-Out)"
      case "digitalAssets":
        return "Income from Digital Assets"
      case "otherIncome":
        return "Other Income"
      default:
        return key
    }
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className="space-y-6">
            <label className="block">
              <span className="text-lg font-semibold text-gray-800">
                Financial Year
              </span>
              <select
                className="mt-2 block w-full h-12 rounded-lg border border-gray-300 bg-white px-4 text-gray-700 shadow-sm focus:border-purple-600 focus:ring-2 focus:ring-purple-300 transition-all"
                value={formData.financialYear}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    financialYear: e.target.value,
                  }))
                }
              >
                <option>FY 2025-2026</option>
                <option>FY 2024-2025</option>
              </select>
            </label>

            <label className="block">
              <span className="text-lg font-semibold text-gray-800">
                Age Group
              </span>
              <select
                className="mt-2 block w-full h-12 rounded-lg border border-gray-300 bg-white px-4 text-gray-700 shadow-sm focus:border-purple-600 focus:ring-2 focus:ring-purple-300 transition-all"
                value={formData.ageGroup}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, ageGroup: e.target.value }))
                }
              >
                <option>0-60</option>
                <option>60-80</option>
                <option>80+</option>
              </select>
            </label>
          </div>
        )
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(formData.incomeDetails).map(([key, value], index) => (
              <label key={index} className="block">
                <span className="text-gray-700 flex items-center gap-2">
                  {formatIncomeDetailsLabel(key)}
                  <InfoTooltip content={getTooltipContent(key)} />
                </span>
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-0 pl-2 flex items-center w-8 pointer-events-none text-white font-bold bg-purple-600 rounded-lg">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={value || ""}
                    onChange={(e) =>
                      handleInputChange("incomeDetails", key, e.target.value)
                    }
                    placeholder="Enter amount"
                    className="pl-12 block w-full h-12 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                  />
                </div>
              </label>
            ))}
          </div>
        )
      case 2:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(formData.deductions).map(([key, value], index) => (
              <label key={index} className="block">
                <span className="text-gray-700 flex items-center gap-2">
                  {formatDeductionLabel(key)}
                  <InfoTooltip content={getTooltipContent(key)} />
                </span>
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-0 pl-2 flex items-center w-8 pointer-events-none text-white font-bold bg-purple-600 rounded-lg">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={value || ""}
                    onChange={(e) =>
                      handleInputChange("deductions", key, e.target.value)
                    }
                    placeholder="Enter amount"
                    className="pl-12 block w-full h-12 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring focus:ring-purple-200"
                  />
                </div>
              </label>
            ))}
          </div>
        )
      default:
        return null
    }
  }

  const chartData = [
    { name: "Total Income", value: taxResults.totalIncome },
    { name: "Deduction", value: taxResults.standardDeduction + taxResults.chapterVIA },
    { name: "Taxable Income", value: taxResults.taxableIncome },
    { name: "Tax Payable", value: taxResults.taxPayable },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6 my-25">
      {/* Regime Selection */}
      <div className="border-b pb-2">
        <div className="flex space-x-4">
          <button
            className={`px-6 py-2 text-lg font-medium transition-colors duration-300 ease-in-out transform rounded-xl ${
              selectedRegime === "new"
                ? "bg-purple-600 text-white border-b-1 border-purple-600"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedRegime("new")}
          >
            New regime
            {selectedRegime === "new" && (
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-xs">
                Recommended
              </span>
            )}
          </button>

          <button
            className={`px-6 py-2 text-lg font-medium transition-colors duration-300 ease-in-out transform rounded-2xl ${
              selectedRegime === "old"
                ? "bg-purple-600 text-white border-b-2 border-purple-600"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedRegime("old")}
          >
            Old regime
          </button>
        <button
        className={`px-6 py-2 text-lg font-medium transition-colors duration-300 ease-in-out transform rounded-xl ${
          selectedRegime === "new" 
            ? "bg-purple-600 text-white border-b-1 border-purple-600"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
        onClick={() => setSelectedRegime("new")}
      >
        New regime
       
      </button>

      <button
        className={`px-6 py-2 text-lg font-medium transition-colors duration-300 ease-in-out transform rounded-2xl ${
          selectedRegime === "old" 
            ? "bg-purple-600 text-white border-b-2 border-purple-600"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
        onClick={() => setSelectedRegime("old")}
      >
        Old regime
      </button>
        </div>
      </div>

      {/* Calculator Form */}
      <div className="bg-white rounded-4xl shadow-md">
        <div className="flex space-x-4 border-b px-6 pt-6">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm font-medium border-b-2 focus:outline-none transition-colors ${
                activeTab === index
                  ? "bg-purple-600 text-white border-b-2 border-purple-60 rounded-3xl"
                  : "border-transparent text-gray-600"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-6">{renderTabContent()}</div>

        <div className="flex flex-col sm:flex-row justify-between p-4 sm:p-6 border-t gap-2 sm:gap-0">
          {activeTab > 0 && (
            <button
              className="w-full sm:w-auto px-6 sm:px-12 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
              onClick={() => setActiveTab((prev) => prev - 1)}
            >
              Back
            </button>
          )}
          {activeTab < tabs.length - 1 ? (
            <button
              className="w-full sm:w-auto px-6 sm:px-12 py-2.5 bg-purple-500 text-white rounded-md hover:bg-purple-700 transition-colors"
              onClick={() => setActiveTab((prev) => prev + 1)}
            >
              Continue
            </button>
          ) : (
            <button
              className="w-full sm:w-auto px-6 sm:px-14 py-2.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              onClick={handleCalculate}
            >
              Calculate
            </button>
          )}
        </div>
      </div>

      {/* Results Dashboard */}
      {showDashboard && (
        <div className="space-y-6">
          {/* Income Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-gray-600">Total Income</h3>
              <p className="text-3xl font-bold mt-2">
                ₹{taxResults.totalIncome.toLocaleString()}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-gray-600">Taxable Income</h3>
              <p className="text-3xl font-bold mt-2">
                ₹{taxResults.taxableIncome.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Chart and Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Chart */}
            <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Tax Breakdown</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 65, bottom: 5 }}
                  >
                    <YAxis
                      tickFormatter={(value) =>
                        `₹${(value / 1000).toFixed(0)}K`
                      }
                      tick={{ fontSize: 12 }}
                    />
                    <Bar dataKey="value" barSize={40}>
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            index === 0
                              ? "#60A5FA" // Total Income
                              : index === 1
                              ? "#F59E0B" // Deductions
                              : index === 2
                              ? "#10B981" // Taxable Income
                              : "#6366F1" // Tax Payable
                          }
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Chart Legend */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-400 rounded mr-2"></div>
                  <span className="text-sm">Total Income</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-amber-500 rounded mr-2"></div>
                  <span className="text-sm">Deductions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-emerald-500 rounded mr-2"></div>
                  <span className="text-sm">Taxable Income</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-indigo-500 rounded mr-2"></div>
                  <span className="text-sm">Tax Payable</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Exemption and Deduction
                  </h3>
                  <p className="text-3xl font-bold">
                    ₹
                    {(taxResults.standardDeduction + taxResults.chapterVIA).toLocaleString()}
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Exempt Allowances</span>
                      <span>
                        ₹{taxResults.exemptAllowances.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Standard Deduction</span>
                      <span>
                        ₹{taxResults.standardDeduction.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chapter VI-A</span>
                      <span>
                        ₹{taxResults.chapterVIA.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Tax Payable</h3>
                  <p className="text-3xl font-bold">
                    ₹{taxResults.taxPayable.toLocaleString()}
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Income Tax</span>
                      <span>
                        ₹{taxResults.incomeTax.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Surcharge</span>
                      <span>₹{taxResults.surcharge.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Health &amp; Education Cess</span>
                      <span>
                        ₹{taxResults.healthEducationCess.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TaxCalculator
