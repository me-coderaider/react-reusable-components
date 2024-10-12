// function ProfileCard(props ){
// 3. 'keys' destructing in the function definition itself i.e
// using only specific details, not the entire 'props' object.
function ProfileCard({ title, handle, image, description }) {
    // 1. 'keys' into multi line variable
    // const title=props.title;
    // const handle=props.handle;

    // 2. 'keys' into 1 line variables
    // const {title, handle}=props;
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pda logo" />
                </figure>
            </div>
            <div className="card-cotent">
                <div className="media-content">
                    <p className="title is-4">Title is {title}</p>
                    <p className="subtitle is-6">Handle is {handle}</p>
                </div>
                <div className="content">{description}</div>
            </div>
        </div>
    );
}

export default ProfileCard;
