/** EXTERNALS **/


import React from 'react';


/** LOCALS **/


import Button from '../components/Button';
import * as styles from './index.module.css';


/** HELPERS **/


/** MAIN **/


const IndexPage = function() {
    return (
        <div>
            <h1>Buttons</h1>

            <section className={styles.section}>
                <Button />
                <Button color="primary" />
                <Button color="secondary" />
                <Button color="danger" />
                &lt;Button color="default|primary|secondary|danger" /&gt;
            </section>

            <section className={styles.section}>
                <Button theme="outline" />
                <Button theme="outline" color="primary" />
                <Button theme="outline" color="secondary" />
                <Button theme="outline" color="danger" />
                &lt;Button theme="outline" /&gt;
            </section>

            <section className={styles.section}>
                <Button theme="text" />
                <Button theme="text" color="primary" />
                <Button theme="text" color="secondary" />
                <Button theme="text" color="danger" />
                &lt;Button theme="text" /&gt;
            </section>

            <section className={styles.section}>
                <Button />
                <Button color="primary" size="sm" />
                <Button color="secondary" size="md" />
                <Button color="danger" size="lg" />
                &lt;Button size="sm|md|lg" /&gt;
            </section>

            <section className={styles.section}>
                <Button disableShadow />
                <Button color="primary" disableShadow />
                <Button color="secondary" disableShadow />
                <Button color="danger" disableShadow />
                &lt;Button disableShadow /&gt;
            </section>
        </div>
    );
}

export default IndexPage;
