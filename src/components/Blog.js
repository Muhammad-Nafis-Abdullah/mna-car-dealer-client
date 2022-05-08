import React from 'react';


const Blog = () => {
    return (
        <div className='container min-h-[calc(100vh-166.5px)] flex flex-col justify-start items-center gap-10 px-5 py-8 fadeIn'>
            <h3 className='text-center text-2xl sm:text-3xl font-medium'>Question and Answer</h3>
            <section className='flex flex-wrap justify-center items-center gap-8'>
                <div  className='blog-card fromTop'>
                    <h6><span className="Q-A">Question 1:</span> What is the difference between <span className='blog-key'>Authorization</span> & <span className='blog-key'>Authentication?</span></h6>
                    <p>
                        <span className="Q-A">Answer :</span><br />
                        <strong className="blog-key">Authentication :</strong> Authentication
                        is to verify the data of a user to give him the access for the next
                        process of website benefits. <br />
                        <strong className="blog-key">Authorization :</strong> Authorization
                        is to give a user permission to use resources or to do further
                        activities.
                        <br />
                        <strong>Simply,</strong> Authentication is the process of verifying
                        who a user is, while Authorization is the process of verifying what
                        they have access to.
                    </p>
                </div>
                <div className='blog-card fromRight'>
                    <h6><span className="Q-A">Question 2:</span> Why are you using <span className="blog-key">Firebase</span>? What other options do you have to implement <span className="blog-key">Authentication</span>?</h6>
                    <p>
                        <span className="Q-A">Answer :</span><br />
                        Firebase is  less technical and less time consuming than writing complete backend code for dynamic apps. If developer ultimately want to host and manage an app in the cloud and can also consider this tool. Firebase is serverless, so there is no worry about cloud server configuration technology. As a Google Cloud service, developer can also access other Google products and features such as Google Drive and spreadsheets. For example, developer can import dummy data from Google Sheets and use it temporarily to deploy the application.
                        <br />
                        Some firebase Alternatives are :
                        1.Parse, 2.Back4App, 3.AWS Amplify, 4.Kuzzle, 5.Couchbase, 6.NativeScript, 7.RxDB, 8.Flutter.
                    </p>
                </div>
                <div className='blog-card fromLeft'>
                    <h6><span className="Q-A">Question 3:</span> What other services does <span className="blog-key">Firebase</span> provide other than <span className="blog-key">Authentication</span>?</h6>
                    <p>
                        <span className="Q-A">Answer :</span><br />
                        <strong className='blog-key'>Firebase Analytics :</strong> Firebase Analytics presents
                        data about the user behavior of applications and suggests the
                        improvement of the performance.
                        <br />
                        <strong className='blog-key'>Cloud Messaging :</strong> Cloud Messaging is a messaging
                        tool that helps the companies to receive and deliver messages on
                        applications at no cost.
                        <br />
                        <strong className='blog-key'>Realtime Database :</strong> Realtime Database is a cloud
                        hosted NoSQL Database that stores and syncs data of the users in
                        real time. <br />
                        <strong>Test Lab :</strong> Test Lab is an app testing
                        infrastructure by which developers can test the applications easily.
                        <br />
                    </p>
                </div>
                <div className='blog-card fromBottom'>
                    <h6><span className="Q-A">Question 4:</span> What other services does <span className="blog-key">Firebase</span> provide other than <span className="blog-key">Authentication</span>?</h6>
                    <p>
                        <span className="Q-A">Answer :</span><br />
                        <strong className='blog-key'>Firebase Analytics :</strong> Firebase Analytics presents
                        data about the user behavior of applications and suggests the
                        improvement of the performance.
                        <br />
                        <strong className='blog-key'>Cloud Messaging :</strong> Cloud Messaging is a messaging
                        tool that helps the companies to receive and deliver messages on
                        applications at no cost.
                        <br />
                        <strong className='blog-key'>Realtime Database :</strong> Realtime Database is a cloud
                        hosted NoSQL Database that stores and syncs data of the users in
                        real time. <br />
                        <strong>Test Lab :</strong> Test Lab is an app testing
                        infrastructure by which developers can test the applications easily.
                        <br />
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Blog;