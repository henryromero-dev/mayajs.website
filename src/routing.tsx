import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./styles.scss";
import Introduction from "./views/introduction/introduction.tsx";
import WhoIsItFor from "./views/who-is-it-for/who-is-it-for.tsx";
import HowItWorks from "./views/how-it-works/how-it-works.tsx";
import Properties from "./views/properties/properties.tsx";
import Objects from "./views/objects/objects.tsx";
import Schema from "./views/schema/schema.tsx";
import Roles from "./views/roles/roles.tsx";
import Authentication from "./views/authentication/authentication.tsx";
import Select from "./views/select/select.tsx";
import Crud from "./views/crud/crud.tsx";
import Get from "./views/get/get.tsx";
import Set from "./views/set/set.tsx";
import Remove from "./views/remove/remove.tsx";
import Storage from "./views/storage/storage.tsx";
import Events from "./views/events/events.tsx";
import Hooks from "./views/hooks/hooks.tsx";
import { motion } from "motion/react";

const Routing = () => {
    const location = useLocation();
    return (
        <motion.div
            key={location.pathname} 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
        >
            <Routes>
                <Route path="/" element={<Introduction />} />
                <Route path="/who-is-it-for" element={<WhoIsItFor />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/schema" element={<Schema />} />
                <Route path="/objects" element={<Objects />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/roles" element={<Roles />} />
                <Route path="/authentication" element={<Authentication />} />
                <Route path="/select" element={<Select />} />
                <Route path="/crud" element={<Crud />} />
                <Route path="/get" element={<Get />} />
                <Route path="/set" element={<Set />} />
                <Route path="/remove" element={<Remove />} />
                <Route path="/storage" element={<Storage />} />
                <Route path="/events" element={<Events />} />
                <Route path="/hooks" element={<Hooks />} />
            </Routes>
        </motion.div>
    );
};

export default Routing;