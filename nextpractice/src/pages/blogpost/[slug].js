import { useRouter } from "next/router";
import style from "../../styles/blog.module.css";

const Blog = () => {
    const route = useRouter();
    const { slug } = route.query;

    return (
        <div className={style.slg_head}>
            <h1>Title of the Page {slug} </h1> 
            <hr /> 
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus numquam nostrum possimus ipsa maxime corrupti fugiat! Odio similique nisi voluptatem reiciendis modi nihil, quaerat ex eveniet doloremque corrupti possimus accusantium. 
            </p>
        </div>
    );
};

export default Blog;
