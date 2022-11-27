import React from "react";

const Blogs = () => {
  return (
    <div className="mb-5">
      <div className="flex flex-col w-full">
        <div className="grid h-20 px-7 card bg-base-300 rounded-box place-items-center">
          <h3 className="text-2xl">
            What is the difference between SQL and NoSQL?
          </h3>
        </div>
        <div>
          <table className="table-normal w-full">
            <thead>
              <tr>
                <th></th>
                <th>SQL</th>
                <th>NoSQL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover">
                <th>1</th>
                <td>Relational database management system (RDBMS)</td>
                <td>Non-relational or distributed database system.</td>
              </tr>

              <tr className="hover">
                <th>2</th>
                <td>
                  These databases have fixed or static or predefined schema
                </td>
                <td>They have dynamic schema</td>
              </tr>
              <tr className="hover">
                <th>3</th>
                <td>
                  These databases are not suited for hierarchical data storage.
                </td>
                <td>
                  These databases are best suited for hierarchical data storage.
                </td>
              </tr>
              <tr className="hover">
                <th>4</th>
                <td>These databases are best suited for complex queries</td>
                <td>These databases are not so good for complex queries</td>
              </tr>
              <tr className="hover">
                <th>5</th>
                <td>Vertically Scalable</td>
                <td>Horizontally scalable</td>
              </tr>
              <tr className="hover">
                <th>6</th>
                <td>Follows ACID property</td>
                <td>
                  Follows CAP(consistency, availability, partition tolerance)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="divider"></div>
        <div className="grid card bg-base-300 rounded-box place-items-center p-5">
          <h3 className="text-2xl mb-5">What is JWT, and how does it work?</h3>
          <p className="bg-white p-3 text-xl">
            <strong>JWT</strong> or JSON Web Token, is an open standard used to
            share security information between two parties — a client and a
            server. Each JWT contains encoded JSON objects, including a set of
            claims. JWTs are signed using a cryptographic algorithm to ensure
            that the claims cannot be altered after the token is issued.
          </p>
          <p className="bg-white p-3 text-xl mb-2">
            <strong>How it works: </strong>
            Basically the identity provider(IdP) generates a JWT certifying user
            identity and Resource server decodes and verifies the authenticity
            of the token using secret salt / public key.
          </p>
          <img src="https://i.ibb.co/Jkx6VQt/JWT.png" alt="JWT" />
          <div className="w-full mt-3 bg-white">
            <p className="bg-white p-3 text-xl text-left">
              1. User sign-in using username and password or google/facebook.
            </p>
            <p className="bg-white p-3 text-xl text-left">
              2. Authentication server verifies the credentials and issues a jwt
              signed using either a secret salt or a private key.
            </p>
            <p className="bg-white p-3 text-xl text-left">
              3. User's Client uses the JWT to access protected resources by
              passing the JWT in HTTP Authorization header.
            </p>
            <p className="bg-white p-3 text-xl text-left">
              4. Resource server then verifies the authenticity of the token
              using the secret salt/ public key.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="grid h-20 px-7 card bg-base-300 rounded-box place-items-center my-5">
          <h3 className="text-2xl mb-5">
            What is the difference between javascript and Node JS?
          </h3>
        </div>
        <div>
          <table className="table-normal w-full">
            <thead>
              <tr className="text-center">
                <th></th>
                <th>Javascript</th>
                <th>NodeJS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover">
                <th>1</th>
                <td>
                  Javascript is a programming language that is used for writing
                  scripts on the website.{" "}
                </td>
                <td>NodeJS is a Javascript runtime environment.</td>
              </tr>

              <tr className="hover">
                <th>2</th>
                <td>Javascript can only be run in the browsers.</td>
                <td>
                  We can run Javascript outside the browser with the help of
                  NodeJS.
                </td>
              </tr>
              <tr className="hover">
                <th>3</th>
                <td>It is basically used on the client-side.</td>
                <td>It is mostly used on the server-side.</td>
              </tr>
              <tr className="hover">
                <th>4</th>
                <td>
                  Javascript is capable enough to add HTML and play with the
                  DOM.
                </td>
                <td>Nodejs does not have capability to add HTML tags.</td>
              </tr>
              <tr className="hover">
                <th>5</th>
                <td>
                  Javascript can run in any browser engine as like JS core in
                  safari and Spidermonkey in Firefox.
                </td>
                <td>
                  V8 is the Javascript engine inside of node.js that parses and
                  runs Javascript.
                </td>
              </tr>
              <tr className="hover">
                <th>6</th>
                <td>Javascript is used in frontend development.</td>
                <td>Nodejs is used in server-side development.</td>
              </tr>
              <tr className="hover">
                <th>7</th>
                <td>
                  Some of the javascript frameworks are RamdaJS, TypedJS, etc.
                </td>
                <td>
                  Some of the Nodejs modules are Lodash, express etc. These
                  modules are to be imported from npm.
                </td>
              </tr>
              <tr className="hover">
                <th>8</th>
                <td>
                  It is the upgraded version of ECMA script that uses Chrome’s
                  V8 engine written in C++.
                </td>
                <td>Nodejs is written in C, C++ and Javascript.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="divider"></div>
        <div className="grid card bg-base-300 rounded-box place-items-center p-5">
          <h3 className="text-2xl mb-5">
            How does NodeJS handle multiple requests at the same time?
          </h3>
          <p className="bg-white p-3 text-xl">
            Given a NodeJS application, since Node is single threaded, say if
            processing involves a Promise.all that takes 8 seconds, does this
            mean that the client request that comes after this request would
            need to wait for eight seconds? No. NodeJS event loop is single
            threaded. The entire server architecture for NodeJS is not single
            threaded.
          </p>
          <p className="bg-white p-3 text-xl">
          Before getting into the Node server architecture, to take a look at typical multithreaded request response model, the web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. threadOne is responsible for all kinds of operations that requestOne demanded including doing any blocking IO operations.
          </p>
          <p className="bg-white p-3 text-xl">
          The fact that the thread needs to wait for blocking IO operations is what makes it inefficient. With this kind of a model, the webserver is only able to serve as much requests as there are threads in the thread pool.
          </p>
          <p className="bg-white p-3 text-xl">
          NodeJS Web Server maintains a limited Thread Pool to provide services to client requests. Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue .
NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded. In other words, EventLoop is the listener for the EventQueue.
          </p>
          <p className="bg-white p-3 text-xl">
          So, we have an event queue where the requests are being placed and we have an event loop listening to these requests in the event queue. What happens next?
          </p>
          <p className="bg-white p-3 text-xl">
          The listener(the event loop) processes the request and if it is able to process the request without needing any blocking IO operations, then the event loop would itself process the request and sends the response back to the client by itself.
          </p>
          <p className="bg-white p-3 text-xl">
          If the current request uses blocking IO operations, the event loop sees whether there are threads available in the thread pool, picks up one thread from the thread pool and assigns the particular request to the picked thread. That thread does the blocking IO operations and sends the response back to the event loop and once the response gets to the event loop, the event loop sends the response back to the client.
          </p>
          <p className="bg-white p-3 text-xl">
          With traditional multithreaded request/response model, every client gets a different thread where as with NodeJS, the simpler request are all handled directly by the EventLoop. This is an optimization of thread pool resources and there is no overhead of creating the threads for every client request. This is how NodeJS is better than traditional multithreaded request response model.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
