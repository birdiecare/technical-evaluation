import React from 'react';
import {Route, Routes} from "react-router-dom";
import CareRecipients from "../lib/care-recipients/list/CareRecipients";
import EditCareRecipient from "../lib/care-recipients/detail/Edit";
import AddCareRecipient from "../lib/care-recipients/detail/Add";
import CareLog from "../lib/care-log/list/CareLog";

function App() {
  return (
    <>
      <header className="container">
        <nav>
          <ul>
              <li><strong>birdie</strong></li>
              <li><a href="/"><small>Care recipients</small></a></li>
              <li><a href="/care-log"><small>Care log</small></a></li>
          </ul>
        </nav>
      </header>

      <main className="container">
          <section>
              <Routes>
                  <Route path="/" element={<CareRecipients />} />
                  <Route path="add" element={<AddCareRecipient />} />
                  <Route path="edit/:id" element={<EditCareRecipient />} />
                  <Route path="care-log" element={<CareLog />} />
              </Routes>
          </section>
      </main>
    </>
  );
}

export default App;
