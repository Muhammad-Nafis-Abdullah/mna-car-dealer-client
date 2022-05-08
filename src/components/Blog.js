import React from 'react';


const Blog = () => {
    return (
        <div className='container min-h-[calc(100vh-166.5px)] flex flex-col justify-start items-center gap-10 px-5 py-8 fadeIn'>
            <h3 className='text-center text-2xl sm:text-3xl font-medium'>Question and Answer</h3>
            <section className='flex flex-wrap justify-center items-center gap-8'>
                <div  className='blog-card fromTop'>
                    <h6><span className="Q-A">Question 1:</span> Difference Between JavaScript and NodeJS?</h6>
                    <p>
                        <span className="Q-A">Answer :</span><br />
                        JavaScript is a lightweight, cross-platform, interpreted scripting programming language that is primarily used for client-side scripting. It's built into both Java and HTML. On the other hand, Node. js is a server-side scripting language based on the Google Chrome V8 engine.
                    </p>
                </div>
                <div className='blog-card fromRight'>
                    <h6><span className="Q-A">Question 2:</span> When should we use Node JS and when should we use MongoDB?</h6>
                    <p>
                        <span className="Q-A">Answer :</span><br />
                        Node JS : Node JS is basically non-blocking JavaScript run time. Node JS is widely used in real time application build. For example, in an application, the user sends a request to the server very quickly and the server sends data to the user very quickly.
                        Mongo DB : We use MongoDBwhen our data does not fit well with the schema of the document centric and relational database. When I have to compromise on a large scale and when I prototype quickly, in all these cases it is better to use the Mangodib database and almost everyone does it.
                    </p>
                </div>
                <div className='blog-card fromLeft'>
                    <h6><span className="Q-A">Question 3:</span> Difference Between Sql and NoSql Database?</h6>
                    <p>
                        <span className="Q-A">Answer :</span><br />
                        Sql : It is a Relational Database Management System (RDBMS) This database has a default schema.This database is not suitable for storing classified data.
                        Nosql : It is a Non-relational or distributed database system. Their schema is dynamic These databases are most commonly used for storing classified data
                    </p>
                </div>
                <div className='blog-card fromBottom'>
                    <h6><span className="Q-A">Question 4:</span> What is the purpose of JWT and how does it work?</h6>
                    <p>
                        <span className="Q-A">Answer :</span><br />
                        JWT is a token used to enhance security when exchanging data between client and server. This allows the server to verify that the person requesting the data is the real client.Its function is that when the user logs in, one copy of this token is saved in the user's browser and another copy is saved in the database. Once the token expires, a new token is generated.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Blog;