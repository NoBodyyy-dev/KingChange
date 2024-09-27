import {ChangeEvent, useEffect, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/StateHooks.ts";
import {getAllCryptsFunc} from "../../store/actions/Crypto.actions.ts";
import {CryptData} from "../../store/interfaces/Crypt.interfaces.ts";
import Statistic from "./Statistic.tsx";
import BorderButton from "../../lib/Buttons/BorderButton.tsx";

import 'swiper/css';
import 'swiper/css/free-mode';
import ExchangeRates from "./ExchangeRates.tsx";
import Rating from "./Rating.tsx";
import ExchangeSkeleton from "../../lib/Skeletons/ExchangeSkeleton.tsx";

const Main = () => {
    const {allCrypts, isLoadingAllCrypts} = useAppSelector(state => state.crypt);
    const dispatch = useAppDispatch();

    const cryptsImages = {
        "BTC": "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=035",
        "ETH": "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=035",
        "USDT": "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=035",
        "BNB": "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=035",
        "SOL": "https://cryptologos.cc/logos/solana-sol-logo.svg?v=035",
        "USDC": "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=035",
        "XRP": "https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=035",
        "STETH": "https://cryptologos.cc/logos/steth-steth-logo.svg?v=035",
        "DOGE": "https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=035",
        "TON": "https://cryptologos.cc/logos/toncoin-ton-logo.svg?v=035",
        "ADA": "https://cryptologos.cc/logos/cardano-ada-logo.svg?v=035",
        "TRX": "https://cryptologos.cc/logos/tron-trx-logo.svg?v=035",
        "AVAX": "https://cryptologos.cc/logos/avalanche-avax-logo.svg?v=035",
        "WBTC": "https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.svg?v=035",
        "SHIB": "https://cryptologos.cc/logos/shiba-inu-shib-logo.svg?v=035",
        "WETH": "https://svgshare.com/i/Bff.svg",
        "LINK": "https://cryptologos.cc/logos/chainlink-link-logo.svg?v=035",
        "BCH": "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.svg?v=035",
        "DOT": "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=035",
        "EDLC": "/undefined-crypt.svg",
        "NEAR": "https://cryptologos.cc/logos/near-protocol-near-logo.svg?v=035",
        "CNX": "/undefined-crypt.svg",
        "LEO": "https://cryptologos.cc/logos/unus-sed-leo-leo-logo.svg?v=035",
        "LTC": "https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=035",
        "SUI": "https://cryptologos.cc/logos/sui-sui-logo.svg?v=035",
        "UNI": "/undefined-crypt.svg",
    }

    const [selectCrypt, setSelectCrypt] = useState({money: 1, name: ""});
    const [convertedFrom, setConvertedFrom] = useState({money: 1, crypt: {}});
    const [convertedTo, setConvertedTo] = useState<{ money: number, crypt?: CryptData }>({money: 1, crypt: null});

    const fromInput = useRef(null);
    const [select, setSelect] = useState({value: "1", name: "BTC"});
    const [selectTo, setSelectTo] = useState({value: "1", name: "USDT"});

    useEffect(() => {
        dispatch(getAllCryptsFunc({start: 0, limit: 25}))
    }, [allCrypts.length]);

    useEffect(() => {
        if (allCrypts.length) {
            const fromCryptoData = allCrypts.find((crypto) => crypto.symbol === select.name);
            const toCryptoData = allCrypts.find((crypto) => crypto.symbol === selectTo.name);

            if (fromCryptoData && toCryptoData) {
                const fromPrice = parseFloat(fromCryptoData.price_usd);
                console.log(fromPrice)
                console.log(toCryptoData);
                const toPrice = parseFloat(toCryptoData.price_usd);
                console.log(toPrice)
                const converted = (convertedFrom.money * fromPrice) / toPrice;
                console.log("PPP{}{}{}{[", converted)
                setConvertedTo({...convertedTo, money: parseFloat(converted.toFixed(6))});
                console.log(convertedTo.money)
            }
        }
    }, [allCrypts.length, convertedFrom.money, convertedTo.money]);

    useEffect(() => {
        const findCrypt = allCrypts.find((cr) => cr.symbol === select.name);
        if (findCrypt?.symbol) setConvertedFrom({...convertedFrom, crypt: {...findCrypt}})
    }, [allCrypts.length, select.name]);

    useEffect(() => {
        const findCrypt = allCrypts.find((cr) => cr.symbol === selectTo.name);
        console.log("=====", findCrypt)
        if (findCrypt?.symbol) {
            setConvertedTo({...convertedTo, crypt: {...findCrypt}})
            console.log(convertedTo.crypt)
        }
    }, [allCrypts.length, selectTo.name]);

    return (
        <>
            <div className="main__container">
                <h1 className="title center">Моментальный обмен <br/> криптовалют</h1>
                <div className="main__block change block-gradient-border">
                    <div
                        className="change__exchange_rate">1 {convertedFrom.crypt.symbol} ≈ {convertedFrom.crypt.price_usd} USD
                    </div>
                    <div className="change__crypt">
                        <div className="change__crypt__block" onClick={() => fromInput.current.focus()}>
                            <div>
                                <p>Вы отдаете</p>
                                <input ref={fromInput} className="change__crypt__block-input" value={convertedFrom.money}
                                       onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                           const regex = /[a-zA-Zа-яА-Я&*()^%$#]/g;
                                           if (!regex.test(e.target.value) && e.target.value.length <= 15) setConvertedFrom({
                                               ...convertedFrom,
                                               money: Number(e.target.value)
                                           })
                                       }}/>
                            </div>
                            <div className="select">
                                <div className="select__head"></div>
                                <div className="select__info">
                                    {allCrypts.slice(0, 5).map((_crypt, index) => {
                                        return <div onClick={() => setSelect({...select, name: _crypt.symbol})}
                                                    key={index} className="select__info-body">{_crypt.name}</div>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="change__crypt__block flex-align-center-sbetw">
                            <div>
                                <p>Вы получаете пизды</p>
                                <div>{convertedTo.money}</div>
                                {/*<input className="change__crypt__block-input" value={selectCrypt.value}*/}
                                {/*       onChange={(e: ChangeEvent<HTMLInputElement>) => {*/}
                                {/*           const regex = /[a-zA-Zа-яА-Я&*()^%$#=+_]/g;*/}
                                {/*           if (!regex.test(e.target.value) && e.target.value.length <= 15) {*/}
                                {/*               setSelectCrypt({...selectCrypt, value: Number(e.target.value)})*/}
                                {/*           }*/}
                                {/*       }}/>*/}
                            </div>
                            <div className="select">
                                <div className="select__head"></div>
                                <div className="select__info">
                                    {allCrypts.slice(0, 5).map((_crypt, index) => {
                                        return <div onClick={() => setSelectTo({...selectTo, name: _crypt.symbol})}
                                                    key={index} className="select__info-body">{_crypt.name}</div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__container">
                <div className="flex-align-center">Почему <img src="/logo.svg" alt="KingChange"/></div>
            </div>
            <div className="main__container">
                <Statistic/>
            </div>
            <div className="main__container flex-to-center">
                <Rating/>
            </div>
            <div className="main__container w-full">
                {isLoadingAllCrypts
                    ? [...Array(8)].map((_, index: number) => {
                        return <ExchangeSkeleton key={index}/>
                    })
                    : <ExchangeRates cryptsImages={cryptsImages} allCrypts={allCrypts}/>}
            </div>
            <div className="main__container">
                <h2 className="subtitle center">Интересные статьи</h2>
                <div className="main__block">

                </div>
            </div>
        </>
    )
        ;
};

export default Main;