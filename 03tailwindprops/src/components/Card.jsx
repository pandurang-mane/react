import React from "react";

const Card = ({username = "PM", post = "Not Assigned Yet", imgURL}) => {
    // console.log(props);
    return (
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src={imgURL} alt="" width="384" height="512" />
            <div className="pt-6 space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ducimus?
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-s">
                        {username}
                    </div>
                    <div>
                        {post}
                    </div>
                </figcaption>
            </div>
        </figure>
    )
}

export default Card;