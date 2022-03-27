import React, { useEffect, useState } from 'react';
import Card from '../Utilities/Card';
import { useProduct } from '../Providers/ProductProvider';
import '../Styles/ProductListing.css';

const ProductListing = ({ searchQuery }) => {
    const { products, productState: { prods }, dispatchState } = useProduct();
    const [ formOneSym, setFormOneSym ] = useState('-');
    const [ formTwoSym, setFormTwoSym ] = useState('-');
    const [ formThreeSym, setFormThreeSym ] = useState('-');
    const [ formDataOne, setFormDataOne ] = useState({
        openWorld: true,
        actionAdventure: true,
        rts: true,
        rolePlaying: true,
        survival: true,
        horror: true,
        party: true
    });

    const { openWorld, actionAdventure, rts, rolePlaying, survival, horror, party } = formDataOne;

    const changeFormOne = e => {
        setFormDataOne({ ...formDataOne, [e.target.name]: e.target.checked });
    }

    const [ formDataTwo, setFormDataTwo ] = useState({
        aboveFour: false,
        aboveThree: false,
        aboveTwo: false,
        aboveOne: false
    });

    const { aboveFour, aboveThree, aboveTwo, aboveOne } = formDataTwo;

    const changeFormTwo = e => {
        if(e.target.name === 'aboveFour') {
            setFormDataTwo({ ...formDataTwo, [e.target.name]: e.target.checked, aboveOne: false, aboveTwo: false, aboveThree: false });
        } else if(e.target.name === 'aboveThree') {
            setFormDataTwo({ ...formDataTwo, [e.target.name]: e.target.checked, aboveOne: false, aboveTwo: false, aboveFour: false });
        } else if(e.target.name === 'aboveTwo') {
            setFormDataTwo({ ...formDataTwo, [e.target.name]: e.target.checked, aboveOne: false, aboveThree: false, aboveFour: false });
        } else if(e.target.name === 'aboveOne') {
            setFormDataTwo({ ...formDataTwo, [e.target.name]: e.target.checked, aboveTwo: false, aboveThree: false, aboveFour: false });
        }
    }

    const [ formDataThree, setFormDataThree ] = useState({
        slider: 5000
    });

    const { slider } = formDataThree;

    const changeFormThree = e => {
        setFormDataThree({ ...formDataThree, [e.target.name]: parseInt(e.target.value) });
    }

    const resetForms = e => {
        setFormDataOne({ ...formDataOne, openWorld: true, actionAdventure: true, rts: true, rolePlaying: true, survival: true, horror: true, party: true });
        setFormDataTwo({ ...formDataTwo, aboveOne: false, aboveTwo: false, aboveThree: false, aboveFour: false });
        setFormDataThree({ ...formDataThree, slider: 5000 });
    }

    const resizeFormOne = e => {
        formOneSym === '-' ? setFormOneSym('+') : setFormOneSym('-');
    }

    const resizeFormTwo = e => {
        formTwoSym === '-' ? setFormTwoSym('+') : setFormTwoSym('-');
    }

    const resizeFormThree = e => {
        formThreeSym === '-' ? setFormThreeSym('+') : setFormThreeSym('-');
    }

    useEffect(() => {
        dispatchState({
            type: 'FILTER_PRODUCTS',
            payload: {
                slider,
                aboveOne,
                aboveTwo,
                aboveThree,
                aboveFour,
                openWorld,
                actionAdventure,
                rts,
                rolePlaying,
                survival,
                horror,
                party,
                products
            }
        })
    }, [slider, aboveOne, aboveTwo, aboveThree, aboveFour, openWorld, actionAdventure, rts, rolePlaying, survival, horror, party, products, dispatchState]);

    return (
        <main className="main product-display flex-center align-start">
            <aside className="form-container-filter flex flex-col">
                <div className="filter-header flex-center justify-between">
                    <h2 className="header-title">Filter By</h2>
                    <button className="btn small clear" onClick={resetForms}>Clear All</button>
                </div>
                <hr className="rule" />
                <div className="form collection-form">
                    <div className="form-header flex-center justify-between">
                        <h3 className="form-title">Collection</h3>
                        <button className="btn small minimize" onClick={resizeFormOne}>{formOneSym}</button>
                    </div>
                    {
                        formOneSym === '-' && (
                            <form className="filter-form">
                                <div className="form-item flex flex-col align-start misc-inputs">
                                    <div className="remember">
                                        <input name='openWorld' type="checkbox" checked={openWorld} onChange={changeFormOne} />
                                        <label htmlFor="password x-small">Open World</label>
                                    </div>
                                </div>
                                <div className="form-item flex flex-col align-start misc-inputs">
                                    <div className="remember">
                                        <input name='actionAdventure' type="checkbox" checked={actionAdventure} onChange={changeFormOne} />
                                        <label htmlFor="password x-small">Action-Adventure</label>
                                    </div>
                                </div>
                                <div className="form-item flex flex-col align-start misc-inputs">
                                    <div className="remember">
                                        <input name='rts' type="checkbox" checked={rts} onChange={changeFormOne} />
                                        <label htmlFor="password x-small">RTS</label>
                                    </div>
                                </div>
                                <div className="form-item flex flex-col align-start misc-inputs">
                                    <div className="remember">
                                        <input name='rolePlaying' type="checkbox" checked={rolePlaying} onChange={changeFormOne} />
                                        <label htmlFor="password x-small">Role-Playing</label>
                                    </div>
                                </div>
                                <div className="form-item flex flex-col align-start misc-inputs">
                                    <div className="remember">
                                        <input name='survival' type="checkbox" checked={survival} onChange={changeFormOne} />
                                        <label htmlFor="password x-small">Survival</label>
                                    </div>
                                </div>
                                <div className="form-item flex flex-col align-start misc-inputs">
                                    <div className="remember">
                                        <input name='horror' type="checkbox" checked={horror} onChange={changeFormOne} />
                                        <label htmlFor="password x-small">Horror</label>
                                    </div>
                                </div>
                                <div className="form-item flex flex-col align-start misc-inputs">
                                    <div className="remember">
                                        <input name='party' type="checkbox" checked={party} onChange={changeFormOne} />
                                        <label htmlFor="password x-small">Party</label>
                                    </div>
                                </div>
                            </form>
                        )
                    }
                </div>
                <div className="form rating-form">
                    <div className="form-header flex-center justify-between">
                        <h3 className="form-title">Rating</h3>
                        <button className="btn small minimize" onClick={resizeFormTwo}>{formTwoSym}</button>
                    </div>
                    {
                        formTwoSym === '-' && (
                            <form className="filter-form">
                                <div className="form-item flex flex-col align-start misc-inputs">
                                    <div className="remember">
                                        <input name="aboveFour" type="radio" checked={aboveFour} onChange={changeFormTwo} />
                                        <label htmlFor="radio x-small">4 Stars & Above</label>
                                    </div>
                                </div>
                                <div className="form-item flex flex-col align-start misc-inputs">
                                    <div className="remember">
                                        <input name="aboveThree" type="radio" checked={aboveThree} onChange={changeFormTwo} />
                                        <label htmlFor="radio x-small">3 Stars & Above</label>
                                    </div>
                                </div>
                                <div className="form-item flex flex-col align-start misc-inputs">
                                    <div className="remember">
                                        <input name="aboveTwo" type="radio" checked={aboveTwo} onChange={changeFormTwo} />
                                        <label htmlFor="radio x-small">2 Stars & Above</label>
                                    </div>
                                </div>
                                <div className="form-item flex flex-col align-start misc-inputs">
                                    <div className="remember">
                                        <input name="aboveOne" type="radio" checked={aboveOne} onChange={changeFormTwo} />
                                        <label htmlFor="radio x-small">1 Star & Above</label>
                                    </div>
                                </div>
                            </form>
                        )
                    }
                </div>
                <div className="form price-form">
                    <div className="form-header flex-center justify-between">
                        <h3 className="form-title">Price</h3>
                        <button className="btn small minimize" onClick={resizeFormThree}>{formThreeSym}</button>
                    </div>
                    {
                        formThreeSym === '-' && (
                            <form className="filter-form">
                                <div className="form-item flex flex-col align-start">
                                    <div className="prices flex-center justify-between">
                                        <span className="small">0</span>
                                        <span className='small'>{slider}</span>
                                        <span className="small">5,000</span>
                                    </div>
                                    <input type="range" name="slider" min="0" max="5000" step="100" value={slider} className="slider" onChange={changeFormThree} />
                                </div>
                            </form>
                        )
                    }
                </div>
            </aside>
            <section className="product-list flex-row-wrap align-start justify-center">
                {
                    prods && prods.map(product => (
                        (product.title && product.title.toLowerCase().indexOf(searchQuery) !== -1) ? (
                            <Card key={product._id} id={product._id} imgSrc={product.imgSrc} title={product.title} price={product.price} stars={product.stars} />
                        ) : ''
                    ))
                }
            </section>
        </main>
    )
}

export default ProductListing;