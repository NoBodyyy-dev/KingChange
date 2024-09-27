const Statistic = () => {
    const statistic = [
        {title: "Ордеров выполнено", className: "done", result: "> 4,618"},
        {title: "Месячный оборот", className: "turnover", result: "$ 351,290.45"},
        {title: "Время ответа тех. поддержки", className: "tech", result: "до 5 минут"},
        {title: "Количество обменных пар", className: "pairs", result: "1,236"},
    ]

    return (
        <>
            <h2 className="subtitle center">Статистика</h2>
            <div className="main__block statistic">
                {statistic.map((stat, index: number) => {
                    return <div className={`statistic__block block-gradient-border ${stat.className}`} key={index}>
                        <div className="flex">Ордеров выполнено</div>
                        <p className="statistic__block-result">{stat.result}</p>
                    </div>
                })}
            </div>
        </>
    );
};

export default Statistic;