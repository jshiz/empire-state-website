"use client"

import { useEffect, useRef } from "react"

export function Fireworks() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []

        // Brand Colors
        const colors = [
            "hsla(250, 70%, 60%, 0.2)", // Subtle Purple
            "hsla(45, 90%, 60%, 0.2)",  // Subtle Gold
            "hsla(280, 80%, 70%, 0.15)", // Lighter Lavender
        ]

        class Particle {
            x: number
            y: number
            vx: number
            vy: number
            alpha: number
            color: string
            size: number
            decay: number

            constructor(x: number, y: number, color: string) {
                this.x = x
                this.y = y
                const angle = Math.random() * Math.PI * 2
                const speed = Math.random() * 2 + 0.5
                this.vx = Math.cos(angle) * speed
                this.vy = Math.sin(angle) * speed
                this.alpha = 0.6
                this.color = color
                this.size = Math.random() * 2 + 1
                this.decay = Math.random() * 0.01 + 0.005
            }

            update() {
                this.x += this.vx
                this.y += this.vy
                this.vy += 0.02 // Subtle gravity
                this.alpha -= this.decay
            }

            draw() {
                if (!ctx) return
                ctx.save()
                ctx.globalAlpha = this.alpha
                ctx.fillStyle = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
                ctx.restore()
            }
        }

        const createFirework = () => {
            const x = Math.random() * canvas.width
            const y = canvas.height - (Math.random() * canvas.height * 0.4) // Random launch height
            const targetY = Math.random() * (canvas.height * 0.6)
            const color = colors[Math.floor(Math.random() * colors.length)]

            // Create burst
            for (let i = 0; i < 30; i++) {
                particles.push(new Particle(x, targetY, color))
            }
        }

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            if (Math.random() < 0.01) { // Low frequency for subtlety
                createFirework()
            }

            particles = particles.filter((p) => p.alpha > 0)
            particles.forEach((p) => {
                p.update()
                p.draw()
            })

            animationFrameId = requestAnimationFrame(render)
        }

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resize()
        window.addEventListener("resize", resize)
        render()

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener("resize", resize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-[5]"
            style={{ mixBlendMode: "screen" }}
        />
    )
}
