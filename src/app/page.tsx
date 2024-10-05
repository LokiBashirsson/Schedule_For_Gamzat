import BackendData from "./components/BackendData/BackendData";
import styles from "./page.module.scss";
import { api } from "./services/api";

export default async function Home() {
  const departamentList = await api.departmentData();

  return (
    <main className={styles.main}>
      <BackendData data={departamentList} />
      <div>
        <ul>
          <li>данные</li>
          <li>данные</li>
          <li>данные</li>
          <li>данные</li>
          <li>данные</li>
          <li>данные</li>
          <li>данные</li>
        </ul>
      </div>
      <div>
        <form>
          <h4>Форма для отправки сообщения</h4>
          <input type="text" placeholder={"Ваш майл"} />
          <textarea name="" id="" placeholder="Ваше сообщение"></textarea>
          <button type="button">Отправить</button>
        </form>
      </div>
    </main>
  );
}
