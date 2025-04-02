import './App.css'

export function Intro(props: {username: string}) {

    return (
        <div className="Intro">
            <h2>{props.username}</h2>
            <p> I'm Andy, and I'm a student at WPI. I'm currently doing my bachelors'degree in Computer Science.
                My biggest dream is to become a better version of myself every day.

            </p>

        </div>
    )
}

export default Intro