// import React, {ChangeEvent} from 'react';
//
// type Props = {
//     selectCrypt:
// }
//
// const ChangeCrypts = () => {
//     return (
//         <div className="main__block change block-gradient-border">
//             <div className="change__exchange_rate">1 BTC ≈ 56,390 USDT</div>
//             <div className="change__crypt">
//                 <div className="change__crypt__block">
//                     <div>
//                         <p>Вы отдаете</p>
//                         <input className="change__crypt__block-input" value={selectCrypt.value}
//                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
//                                    const regex = /[a-zA-Zа-яА-Я&*()^%$#]/g;
//                                    if (!regex.test(e.target.value) && e.target.value.length <= 15) {
//                                        setSelectCrypt({...selectCrypt, value: Number(e.target.value)})
//                                    }
//                                }}/>
//                     </div>
//                 </div>
//                 <div className="change__crypt__block flex-align-center-sbetw">
//                     <div>
//                         <input className="change__crypt__block-input" value={selectCrypt.value}
//                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
//                                    const regex = /[a-zA-Zа-яА-Я&*()^%$#=+_]/g;
//                                    if (!regex.test(e.target.value) && e.target.value.length <= 15) {
//                                        setSelectCrypt({...selectCrypt, value: Number(e.target.value)})
//                                    }
//                                }}/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default ChangeCrypts;