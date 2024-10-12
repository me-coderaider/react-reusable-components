// function ProfileCard(props ){
// 3. 'keys' destructing in the function definition itself i.e 
// using only specific details, not the entire 'props' object.
function ProfileCard({title, handle, image}){

    // 1. 'keys' into multi line variable
    // const title=props.title;
    // const handle=props.handle;

    // 2. 'keys' into 1 line variables
    // const {title, handle}=props;
    return (
        <div>
            <img src={image} alt="pda logo"/>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>

        </div>
    );
}

export default ProfileCard;