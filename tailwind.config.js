/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "booking-bg": "url('/src/assets/images/booking-bg.png')",
      },
      colors: {
        'status-critical': '#FEC3C3',
        'status-serious': '#FFC847',
        'status-caution': '#FBE83A',
        'status-success': '#A7FF76',
        'status-standby': '#80DFFF',
        'status-off': '#D0D4D8',
        'black-100': '#4D4D4D',
        'black-200': '#3C3C3C',
        'black-300': '#1E1E1E',
        'black-400': '#111111',
        'black-500': '#000000',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        'h1': ['3.812rem', {
          fontWeight: '700',
      }],
        'h2': ['3.062rem', {
            fontWeight: '700',
      }],
        'h3': ['2.438rem', {
            fontWeight: '700',
      }],
        'h4': ['1.938rem', {
            fontWeight: '700',
      }],
        'h5': ['1.562rem', {
            fontWeight: '700',
      }],
        'lg': ['1.250rem', {
            fontWeight: '700',
      }],
        'lg-semibold': ['1.250rem', {
            fontWeight: '700',
      }],
        'lg-bold': ['1.250rem', {
            fontWeight: '700',
      }],
        'md': ['1rem', {
            fontWeight: '500',
      }],
        'md-semibold': ['1rem', {
            fontWeight: '600',
      }],
        'md-bold': ['1rem', {
            fontWeight: '700',
      }],
        'sm': ['0.812rem', {
            fontWeight: '500',
      }],
        'sm-semibold': ['0.812rem', {
            fontWeight: '600',
      }],
        'sm-bold': ['0.812rem', {
            fontWeight: '700',
      }],
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
