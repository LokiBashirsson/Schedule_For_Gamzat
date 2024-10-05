import Image from 'next/image';
import styles from './Footer.module.scss';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <div>
                <Image
                    src={''}
                    alt='Лого'
                />
            </div>
            <div>
                <Link href={'/'} >Главное</Link>
                <Link href={'/sheduleforteacher'} >Расписание для преподавателей</Link>
                <Link href={'/sheduleforstudent'} >Расписание для студентов</Link>
            </div>
            <div>
                <p>Контактная информация: +7 999 999 99 99</p>
                <p>Адрес: Махачкала, ул. Атаева 8</p>
                <p>Майл: dgunh@mail.ru</p>
                <p>Наш сайт: dgunh.ru</p>
            </div>
        </div>
    )
}