import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ArticleData } from "./Components/News/ArticleData";

import ScrollToTop from "./ScrollToTop";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Container from "./Components/Container";

import Home from "./Components/Home/Home";
import ChannelManager from "./Components/ChannelManager/ChannelManager";
import ConnectionsOTA from "./Components/Connections/ConnectionsOTA";
import ConnectionsPMS from "./Components/Connections/ConnectionsPMS";
import ConnectionsOTHER from "./Components/Connections/ConnectionsOTHER";
import BookingEngine from "./Components/BookingEngine/BookingEngine";
import Login from "./Components/Login/Login";
import Api from "./Components/API/Api";
import News from "./Components/News/News";
import Paper from "./Components/News/Paper";
import Contact from "./Components/Contact/Contact";
import Privacy from "./Components/Privacy/Privacy";
import TC from "./Components/TC/TC";

function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Switch>
          {/* T&C */}
          <Route path="/terms-and-conditions">
            <Navbar />
            <Container />
            <TC />
            <Footer />
          </Route>
          {/* Privacy */}
          <Route path="/privacy">
            <Navbar />
            <Container />
            <Privacy />
            <Footer />
          </Route>
          {/* Contact */}
          <Route path="/contact">
            <Navbar active="contact" />
            <Container />
            <Contact />
            <Footer />
            {/* <Form /> */}
          </Route>
          {/* News */}
          <Route path="/news">
            <Navbar active="news" />
            <Container />
            <News />
            <Footer />
          </Route>
          {ArticleData.map((article) => (
            <Route path={article.link}>
              <Navbar active="news" />
              <Container />

              <Paper
                title={article.title}
                date={article.date}
                heading={article.heading}
                subheading={article.subheading}
                paragraph={article.paragraph}
              />
              <Footer />
            </Route>
          ))}
          {/* <Route path={ArticleData[0].link}>
            <Navbar active="news" />
            <Container />

            <Paper
              title={ArticleData[0].title}
              date={ArticleData[0].date}
              heading={ArticleData[0].heading}
              subheading={ArticleData[0].subheading}
              paragraph={ArticleData[0].paragraph}
            />
            <Footer />
          </Route> */}

          {/* API */}
          <Route path="/api">
            <Navbar active="api" />
            <Container />
            <Api />
            <Footer />
          </Route>
          {/* Connections */}

          {/* Connections - OTA */}
          <Route path="/connections-ota">
            <Navbar active="connections" />
            <Container />
            <ConnectionsOTA />
            <Footer />
          </Route>
          {/* Connections - PMS */}
          <Route path="/connections-pms">
            <Navbar active="connections" />
            <Container />
            <ConnectionsPMS />
            <Footer />
          </Route>
          {/* Connections - OTHER */}
          <Route path="/connections-other">
            <Navbar active="connections" />
            <Container />
            <ConnectionsOTHER />
            <Footer />
          </Route>

          {/* Booking Engine */}

          <Route path="/booking-engine">
            <Navbar active="booking-engine" />
            <Container />
            <BookingEngine />
            <Footer />
          </Route>

          {/* Channel Manager */}
          <Route path="/channel-manager">
            <Navbar active="channel-manager" />
            <Container />
            <ChannelManager />
            <Footer />
          </Route>

          {/* Login */}
          <Route path="/login">
            <Navbar active="login" />
            <Container />
            <Login />
            <Footer />
          </Route>

          {/* Home */}
          <Route path="/">
            <Navbar active="home" />
            <Container />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
