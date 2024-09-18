import css from './Laziness.module.scss'

function Laziness() {
    return (
        <div className={css.container}>
            <div className={css.introDiv}>
                <p>All About Laziness: What Causes It and What to Do About It</p>
                <img src="/laziness2.jpg" alt="laziness-main-img" />
                <p className={css.bottomP}>Some experts argue there’s no such thing as laziness; we live in a society that encourages us to try to do too much in the first place.</p>
            </div>
            <div className={css.secondDiv}>
                <p>
                    <span>What’s laziness?</span> Laziness (also known as indolence or sloth) is disinclination to activity or exertion despite having the ability to act or to exert oneself.
                    <br />
                    <br />
                    It’s also described as a person's reluctance to perform a chore or an exercise despite having the ability to actually do it.
                </p>
            </div>
        </div>
    )
}

export default Laziness
