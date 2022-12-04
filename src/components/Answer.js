
import '../style/Answer.css';

export default function Answer() {

    let {answerOne, answerTwo} = ''
    answerOne = 'Alex 1'
    answerTwo = 'Alex 2'

    return (
        <section className='answe'>
            <h2 className="answe--title">{answerOne}</h2>
            <h2 className="answe--title">{answerTwo}</h2>
        </section>
    )
}

