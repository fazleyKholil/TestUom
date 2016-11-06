var gitgraph = new GitGraph({
    template: "metro", // or blackarrow
    orientation: "vertical",
    author: "John Doe",
    mode: "extended" // or compact if you don't want the messages
});

var author1 = "Kervin";
var author2 = "Abhishek";

var master = gitgraph.branch("master");
master.commit("My first commit"); // 1 commit upon HEAD

master.commit({
    author: author1,
    message: "add readme.md"
});

master.commit({
    author: author2,
    message: "rename readme.md"
});

var develop = master.branch("develop");

develop.commit({
    author: author1,
    message: "initialise gitflow"
});

develop.commit({
    author: author2,
    message: "initialise gitflow"
});


var featureLogOut = develop.branch("Feature/Logout");
var featureLogin = develop.branch("Feature/LogIn");

featureLogOut.commit({
    author: author1,
    message: "add logout button"
});

featureLogOut.commit();
featureLogOut.commit();
featureLogOut.commit();
featureLogOut.commit();
featureLogOut.commit();
featureLogOut.commit();
featureLogOut.commit();

featureLogin.commit({
    author: author2,
    message: "add logout button"
});

featureLogin.commit({
    author: author2,
    message: "add logout button"
});

featureLogin.commit({
    author: author2,
    message: "add logout button"
});

featureLogin.commit({
    author: author2,
    message: "add logout button"
});


featureLogOut.merge(develop);
featureLogin.merge(develop);

develop.merge(master);