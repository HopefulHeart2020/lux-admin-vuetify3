export default [
  {
    path: "/landing",
    name: "landing-home",
    component: () =>
      import(
        /* webpackChunkName: "landing-home" */ "@/views/landing/HomePage.vue"
      ),
    meta: {
      layout: "landing",
    },
  },
  {
    path: "/landing/pricing",
    name: "landing-pricing",
    component: () =>
      import(
        /* webpackChunkName: "landing-pricing" */ "@/views/landing/PricingPage.vue"
      ),
    meta: {
      layout: "landing",
    },
  },
  {
    path: "/landing/hero",
    name: "landing-hero",
    component: () =>
      import(
        /* webpackChunkName: "landing-hero" */ "@/views/landing/hero/HeroPage.vue"
      ),
    meta: {
      layout: "landing",
    },
  },
  {
    path: "/landing/feature",
    name: "landing-feature",
    component: () =>
      import(
        /* webpackChunkName: "landing-feature" */ "@/views/landing/feature/FeaturePage.vue"
      ),
    meta: {
      layout: "landing",
    },
  },
  {
    path: "/landing/pricing",
    name: "landing-pricing",
    component: () =>
      import(
        /* webpackChunkName: "landing-pricing" */ "@/views/landing/pricing/PricingPage.vue"
      ),
    meta: {
      layout: "landing",
    },
  },
  {
    path: "/landing/card",
    name: "landing-card",
    component: () =>
      import(
        /* webpackChunkName: "landing-card" */ "@/views/landing/card/CardPage.vue"
      ),
    meta: {
      layout: "landing",
    },
  },
  {
    path: "/landing/team",
    name: "landing-team",
    component: () =>
      import(
        /* webpackChunkName: "landing-team" */ "@/views/landing/team/TeamPage.vue"
      ),
    meta: {
      layout: "landing",
    },
  },
  {
    path: "/landing/testimonial",
    name: "landing-testimonial",
    component: () =>
      import(
        /* webpackChunkName: "landing-testimonial" */ "@/views/landing/testimonial/TestimonialPage.vue"
      ),
    meta: {
      layout: "landing",
    },
  },
  {
    path: "/landing/stars",
    name: "landing-stars",
    component: () =>
      import(
        /* webpackChunkName: "landing-stars" */ "@/views/landing/stars/StarsPage.vue"
      ),
    meta: {
      layout: "landing",
    },
  },
  {
    path: "/landing/logos",
    name: "landing-logos",
    component: () =>
      import(
        /* webpackChunkName: "landing-logos" */ "@/views/landing/logos/LogosPage.vue"
      ),
    meta: {
      layout: "landing",
    },
  },
  {
    path: "/landing/calltoaction",
    name: "landing-calltoaction",
    component: () =>
      import(
        /* webpackChunkName: "landing-calltoaction" */ "@/views/landing/calltoaction/CallToActionPage.vue"
      ),
    meta: {
      layout: "landing",
    },
  },
  {
    path: "/landing/newsletter",
    name: "landing-newsletter",
    component: () =>
      import(
        /* webpackChunkName: "landing-newsletter" */ "@/views/landing/newsletter/NewsletterPage.vue"
      ),
    meta: {
      layout: "landing",
    },
  },
  {
    path: "/landing/faq",
    name: "landing-faq",
    component: () =>
      import(
        /* webpackChunkName: "landing-faq" */ "@/views/landing/faq/FQAPage.vue"
      ),
    meta: {
      layout: "landing",
    },
  },
  {
    path: "/landing/toolbar",
    name: "landing-toolbar",
    component: () =>
      import(
        /* webpackChunkName: "landing-toolbar" */ "@/views/landing/toolbar/ToolbarPage.vue"
      ),
    meta: {
      layout: "landing",
    },
  },
  {
    path: "/landing/footer",
    name: "landing-footer",
    component: () =>
      import(
        /* webpackChunkName: "landing-footer" */ "@/views/landing/footer/FooterPage.vue"
      ),
    meta: {
      layout: "landing",
    },
  },
];
