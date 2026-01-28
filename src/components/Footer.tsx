import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="py-12 md:py-16 text-center relative z-10"
        >
            <p className="text-muted-text text-sm md:text-base font-light opacity-70">
                © 2026 — Tous droits réservés à mon être humain préféré{' '}
                <motion.span
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(244, 114, 182, 0.3))' }}
                >
                    ❤️
                </motion.span>
            </p>
        </motion.footer>
    );
};

export default Footer;
