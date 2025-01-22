import React, { useEffect, useState } from 'react'

const ProfitCalc = () => {
    const [investedAmmount, setInvestedAmount] = useState(0)
    const [initialCryptoPrice, setInitialCryptoPrice] = useState(0)
    const [sellingPrice, setSellinPrice] = useState(0)
    const [investmentFeePercent, setInvestmentFeePercent] = useState(0)
    const [exitFeePercent, setExitFeePercent] = useState(0)
    const [totalInvestmentFee, setTotalInvestmentFee] = useState(0)
    const [totalExitFee, setTotalExitFee] = useState(0)
    const [totalProfit, setTotalProfit] = useState(0)
    useEffect(() => {
        setTotalInvestmentFee((investedAmmount * investmentFeePercent) / 100)
        const totalInvested = investedAmmount - totalInvestmentFee
        const cryptoQuantity = totalInvested / initialCryptoPrice;
        const totalSellingValue = cryptoQuantity * sellingPrice;
        setTotalExitFee((totalSellingValue * exitFeePercent) / (100 + exitFeePercent))
        const netSellingValue = totalSellingValue - totalExitFee;
        setTotalProfit(netSellingValue - investedAmmount)
    }, [initialCryptoPrice, investedAmmount, sellingPrice, investmentFeePercent, exitFeePercent, totalExitFee, totalInvestmentFee])
    return (
        <div className='d-flex  flex-column py-4 px-5'>
            <h1 className='align-self-center'>Crypto Profit Calculator</h1>
            <div className="row g-3 align-items-center mb-4">
                <div className="col-md-4 col-12">
                    <label htmlFor="investedAmmount" className="col-form-label">Invested Amount</label>
                    <div className='input-group'>
                        <span className="input-group-text text-secondary border-0">₹</span>
                        <input value={investedAmmount} onChange={(e) => setInvestedAmount(parseInt(e.target.value))} type="number" id="investedAmmount" className="form-control bg-light border-0 p-3" aria-describedby="numberHelpInline" />
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <label htmlFor="cryptoPrice" className="col-form-label">Initial Crypto Price</label>
                    <div className='input-group'>
                        <span className="input-group-text text-secondary border-0">₹</span>
                        <input value={initialCryptoPrice} onChange={(e) => setInitialCryptoPrice(parseInt(e.target.value))} type="number" id="cryptoPrice" className="form-control bg-light border-0 p-3" aria-describedby="numberHelpInline" />
                    </div>
                </div>
                <div className="col-md-4" col-12>
                    <label htmlFor="sellingPrice" className="col-form-label">Selling Crypto Price</label>
                    <div className='input-group'>
                        <span className="input-group-text text-secondary border-0">₹</span>
                        <input value={sellingPrice} onChange={(e) => setSellinPrice(parseInt(e.target.value))} type="number" id="sellingPrice" className="form-control bg-light border-0 p-3" aria-describedby="numberHelpInline" />
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <label htmlFor="investement" className="col-form-label">Investment Fee (%)</label>
                    <div className='input-group'>
                        <input value={investmentFeePercent} onChange={(e) => setInvestmentFeePercent(parseFloat(e.target.value))} type="number" id="investement" className="form-control bg-light border-0 p-3" aria-describedby="numberHelpInline" />
                        <span className="input-group-text text-secondary border-0">%</span>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <label htmlFor="exit" className="col-form-label">Exit Fee (%)</label>
                    <div className='input-group'>
                        <input value={exitFeePercent} onChange={(e) => setExitFeePercent(parseFloat(e.target.value))} type="number" id="exit" className="form-control bg-light border-0 p-3" aria-describedby="numberHelpInline" />
                        <span className="input-group-text text-secondary border-0">%</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className='d-flex flex-column flex-md-row justify-content-between align-items'>
                <div className='d-flex flex-column col-md-3 col-12'>
                    <span>Total Investment Fee: ₹{totalInvestmentFee.toFixed(2)}</span>
                    <span>Total Exit Fee: ₹{totalExitFee.toFixed(2)}</span>
                </div>
                <div className={`d-flex flex-column col-md-9  col-12 ${totalProfit < 0 ? 'red' : 'green'}`}>
                    <span>
                        Total {totalProfit < 0 ? 'Loss' : 'Profit'}
                    </span>
                    <span className={totalProfit < 0 ? 'text-red' : 'text-green'}>
                        ₹{totalProfit.toFixed(2)}
                    </span>

                </div>

            </div>
        </div>
    )
}

export default ProfitCalc