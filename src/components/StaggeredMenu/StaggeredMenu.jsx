import { useState, useRef, useLayoutEffect, useEffect } from "react"
import { gsap } from "gsap"
import styles from "./StaggeredMenu.module.css"




function StaggeredMenu({ items, socialItems }) {
    const [open, setOpen] = useState(false)
    const panelRef = useRef(null)
    const itemsRef = useRef([])
itemsRef.current = []

const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
        itemsRef.current.push(el)
    }
}

    // Animación abrir / cerrar
    useLayoutEffect(() => {
  if (!panelRef.current) return

  if (open) {
    gsap.fromTo(
      panelRef.current,
      { xPercent: 100 },
      { xPercent: 0, duration: 0.8, ease: "power4.out" }
    )

    gsap.fromTo(
      itemsRef.current,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.2,
      }
    )
  } else {
    gsap.to(panelRef.current, {
      xPercent: 100,
      duration: 0.6,
      ease: "power4.in",
    })
  }
}, [open])


    // Cerrar con ESC
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setOpen(false)
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [])

    return (
        <>
            {/* Botón */}
            <button
                className={styles.menuToggle}
                onClick={() => setOpen(true)}
                style={{ opacity: open ? 0 : 1, pointerEvents: open ? "none" : "auto" }}
            >
                Menu
            </button>

            {/* Overlay */}
            <div
                className={`${styles.menuOverlay} ${open ? styles.menuOverlayOpen : ""}`}
                onClick={() => setOpen(false)}
            >
                {/* Panel */}
                <nav
                    ref={panelRef}
                    className={styles.menuPanel}
                    onClick={(e) => e.stopPropagation()}
                >
                    <ul className={styles.menuList}>
                        {items.map((item, index) => (
                            <li
                                key={item.label}
                                ref={addToRefs}
                            >
                                <a
                                    href={item.link}
                                    onClick={() => setOpen(false)}
                                >
                                    <span className={styles.menuIndex}>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    {item.label.toUpperCase()}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.menuSocials}>
                        {socialItems.map((social) => (
                            <a
                                key={social.label}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.label}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </>
    )
}

export default StaggeredMenu
