'use client';
import Image from 'next/image';
import styles from './Header.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {

    const pathRouter = usePathname()

    return (
        <div className={styles.Header}>
            <div className={styles.menu}>
                <div className={styles.menu_left}>
                    <Image
                        src={''}
                        alt='Лого'
                    />
                </div>
                <div className={styles.menu_right}>
                    <Link href={'/'} className={pathRouter === '/' ? styles.active : ''} >Главное</Link>
                    <Link href={'/sheduleforteacher'} className={pathRouter === '/sheduleforteacher' ? styles.active : ''} >Расписание для преподавателей</Link>
                    <Link href={'/sheduleforstudent'} className={pathRouter === '/sheduleforstudent' ? styles.active : ''} >Расписание для студентов</Link>
                    <a>Авторизация</a>
                </div>
            </div>
        </div>
    )
}