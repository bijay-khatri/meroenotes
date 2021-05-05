import './Menu.css';

function mapToListItem(items) {
  if(!Array.isArray(items) || items.lenght === 0) return;
  return items.filter(item => item.active === true)
  .sort((m1, m2) => m1.order - m2.order)
  .map(item => (<li key={item.slug} className = "menu-list-item">
          <a href = { item.link} >
            {item.name}
          </a>
          <ul>
            { mapToListItem(item.items) }
          </ul>
      </li>));

}

export default function (props) {
    const {
        items = []
    } = props;

    return (<header className = "Menu-container">
          <ul> {mapToListItem(items)} </ul>
        </header>)
}
