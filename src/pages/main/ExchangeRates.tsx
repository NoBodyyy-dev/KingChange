import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, FreeMode} from "swiper/modules";
import {CryptData} from "../../store/interfaces/Crypt.interfaces.ts";
import {useAppSelector} from "../../hooks/StateHooks.ts";
import {memo} from "react";

type Props = {
    allCrypts: CryptData[],
    cryptsImages: Record<string, string>,
}

const ExchangeRates = memo((props: Props) => {
    const {isLoadingAllCrypts} = useAppSelector((state) => state.crypt)

    return (
        <>
            <h2 className="subtitle center">Актуальные курсы криптовалют</h2>
            {isLoadingAllCrypts
                ? "Загрузка крипты"
                :
                <Swiper
                    slidesPerView={10}
                    spaceBetween={20}
                    speed={7000}
                    freeMode={true}
                    effect={"slide"}
                    autoplay={{
                        delay: -1,
                        stopOnLastSlide: false,
                    }}
                    breakpoints={{
                        1720: {
                            slidesPerView: 10,
                        },
                        1450: {
                            slidesPerView: 8.7,
                        },
                        1300: {
                            slidesPerView: 7.7
                        },
                        1200: {
                            slidesPerView: 6.8
                        },
                        1000: {
                            slidesPerView: 6
                        },
                        850: {
                            slidesPerView: 5
                        },
                        600: {
                            slidesPerView: 4,
                        }
                    }}
                    modules={[FreeMode, Autoplay]}
                    loop={true}
                    className="main__block crypts flex"
                >
                    {props.allCrypts.map((crypt: CryptData, index: number) => {
                        return <SwiperSlide key={index}>
                            <div className="crypts__item flex-col-betw block-gradient-border">
                                <div className="flex">
                                    <img src={props.cryptsImages[crypt.symbol]} alt={crypt.name}
                                         className="crypts__item-logo"/>
                                    <span className="crypts__item__titles">
                                        <p>{crypt.name}</p>
                                        <p className="txt-gray">{crypt.symbol}</p>
                                    </span>
                                </div>
                                <div>
                                    <div
                                        className={`crypts__item-change ${crypt.percent_change_24h[0] === "-" ? "minus" : "plus"}`}>{crypt.percent_change_24h[0] === "-" ? crypt.percent_change_24h : `+${crypt.percent_change_24h}`}%
                                    </div>
                                    <p className="crypts__item-price">${crypt.price_usd}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                </Swiper>}
        </>
    );
});

export default ExchangeRates;