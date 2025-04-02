export function title(className: string, teamNumber: number, names: string){
    return(
        <div className={"title"}>
            <h1> {`${className} `} </h1>
            <h1> {`Team Number: ${teamNumber}   Name: ${names} `} </h1>
        </div>
    );
}