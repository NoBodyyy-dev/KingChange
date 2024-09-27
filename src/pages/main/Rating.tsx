import BorderButton from "../../lib/Buttons/BorderButton.tsx";

const Rating = () => {
    return (
        <>
            <div className="main__block rating flex-col-betw block-gradient-border">
                <div className="flex">
                    <h2 className="subtitle">Великолепный рейтинг на основе отзывов наших клиентов</h2>
                    <div>
                        <div className="rating__stars flex">
                            {[...Array(5)].map((_m, index) => {
                                return <div key={index} className="rating__stars-item flex-to-center"></div>
                            })}
                        </div>
                        <p>На основе 100+ отзывов</p>
                    </div>
                </div>
                <BorderButton>Читать отзыв Trustpilot</BorderButton>
            </div>
        </>
    );
};

export default Rating;