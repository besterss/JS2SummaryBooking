import { render } from '@czechitas/render';
import { BookingSummary } from '../components/BookingSummary';
import '../global.css';
import './index.css';

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Webová aplikace</h1>
    </header>
    <main>
      <BookingSummary />
    </main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);
