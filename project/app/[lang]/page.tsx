'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Package2, Truck, Clock, Shield, ArrowRight } from 'lucide-react';
import { ShippingCalculator } from '@/components/shipping-calculator';
import { TestimonialSlider } from '@/components/testimonial-slider';
import { CoverageMap } from '@/components/coverage-map';
import OneStopService from '@/components/onetopservice';
import BrandsCarousel from '@/components/brand-carousel';
import ShippingServices from '@/components/shipping-service';
import Link from 'next/link';

export default function Home() {
  const params = useParams();
  const lang = (params?.lang as string) || 'pt'; // Usa 'pt' como fallback

  type ContentType = {
    [key: string]: {
      title: string;
      subtitle: string;
      description: string;
      benefits: {
        icon: JSX.Element;
        title: string;
        description: string;
      }[];
    };
  };

  const content: ContentType = {
    en: {
      title: 'Your International Purchases',
      subtitle: 'Without Borders',
      description: 'Shop anywhere in the world and receive in Brazil with ease. Addresses in 17 countries, package consolidation, and personalized service.',
      benefits: [
        {
          icon: <Package2 className="h-8 w-8" />,
          title: 'Addresses in 17 Countries',
          description: 'Receive your purchases at dedicated addresses in major global markets',
        },
        {
          icon: <Truck className="h-8 w-8" />,
          title: 'Fast and Secure Shipping',
          description: 'Express delivery with full tracking and included insurance',
        },
        {
          icon: <Clock className="h-8 w-8" />,
          title: '24/7 Support',
          description: 'Specialized support available every day, anytime',
        },
        {
          icon: <Shield className="h-8 w-8" />,
          title: 'Guaranteed Protection',
          description: 'Your packages protected with full insurance and delivery guarantee',
        },
      ],
    },
    pt: {
      title: 'Suas Compras Internacionais',
      subtitle: 'Sem Fronteiras',
      description: 'Compre em qualquer lugar do mundo de qualquer marca e receba no Brasil com facilidade. Endereços em 17 países, consolidação de pacotes e atendimento personalizado.',
      benefits: [
        {
          icon: <Package2 className="h-8 w-8" />,
          title: 'Endereços em 17 Países',
          description: 'Receba suas compras em endereços dedicados nos principais mercados globais',
        },
        {
          icon: <Truck className="h-8 w-8" />,
          title: 'Envio Rápido e Seguro',
          description: 'Entrega expressa com rastreamento completo e seguro incluso',
        },
        {
          icon: <Clock className="h-8 w-8" />,
          title: 'Atendimento 24/7',
          description: 'Suporte especializado disponível todos os dias, a qualquer hora',
        },
        {
          icon: <Shield className="h-8 w-8" />,
          title: 'Proteção Garantida',
          description: 'Seus pacotes protegidos com seguro completo e garantia de entrega',
        },
      ],
    },
    es: {
      title: 'Sus Compras Internacionales',
      subtitle: 'Sin Fronteiras',
      description: 'Compre en cualquier lugar del mundo y reciba en Brasil con facilidad. Direcciones en 17 países, consolidación de paquetes y atención personalizada.',
      benefits: [
        {
          icon: <Package2 className="h-8 w-8" />,
          title: 'Direcciones en 17 Países',
          description: 'Reciba sus compras en direcciones dedicadas en los principales mercados globales',
        },
        {
          icon: <Truck className="h-8 w-8" />,
          title: 'Envío Rápido y Seguro',
          description: 'Entrega expresa con seguimiento completo y seguro incluido',
        },
        {
          icon: <Clock className="h-8 w-8" />,
          title: 'Atención 24/7',
          description: 'Soporte especializado disponible todos los días, a qualquer hora',
        },
        {
          icon: <Shield className="h-8 w-8" />,
          title: 'Protección Garantizada',
          description: 'Sus paquetes protegidos con seguro completo y garantía de entrega',
        },
      ],
    },
  };

  const { title, subtitle, description, benefits } = content[lang] || content.en;

  const cta = {
    primary: lang === 'en' ? 'Get Started' : lang === 'pt' ? 'Começar Agora' : 'Comenzar Ahora',
    howItWorks: lang === 'en' ? 'How It Works' : lang === 'pt' ? 'Como Funciona' : 'Cómo Funciona',
    calculateShipping: lang === 'en' ? 'Calculate Your Shipping' : lang === 'pt' ? 'Calcule o Envio' : 'Calcula tu Envío',
    shippingDescription: lang === 'en'
      ? 'Simulate your international shipping cost in real-time'
      : lang === 'pt'
      ? 'Simule o custo do seu envio internacional em tempo real'
      : 'Simula el costo de tu envío internacional en tiempo real',
    readyTitle: lang === 'en' ? 'Ready to Start Shopping Globally?' : lang === 'pt' ? 'Pronto para Comprar Globalmente?' : '¿Listo para Comprar Globalmente?',
    readyDescription: lang === 'en'
      ? 'Join thousands of customers enjoying hassle-free international shopping'
      : lang === 'pt'
      ? 'Junte-se a milhares de clientes aproveitando compras internacionais sem complicações'
      : 'Únete a miles de clientes disfrutando de compras internacionales sin complicaciones',
    testimonialsTitle: lang === 'en' ? 'What Our Clients Say' : lang === 'pt' ? 'O Que Dizem Nossos Clientes' : 'Qué Dicen Nuestros Clientes',
    testimonialsDescription: lang === 'en'
      ? 'Real stories from clients who trust our services'
      : lang === 'pt'
      ? 'Histórias reais de clientes que confiam em nossos serviços'
      : 'Historias reales de clientes que confían en nuestros servicios',
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              {title}
              <br />
              <span className="text-primary">{subtitle}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href={`/${lang}/auth`}>
                <Button size="lg" className="text-lg px-8 py-6">
                  {cta.primary}
                </Button>
              </Link>
              <Link href={`/${lang}/explanation`}>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  {cta.howItWorks}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brands Carousel Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <BrandsCarousel />
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="bg-accent/30 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            {lang === 'en' ? 'Global Coverage' : lang === 'pt' ? 'Cobertura Global' : 'Cobertura Global'}
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            {lang === 'en'
              ? 'Dedicated addresses in major global markets for your international purchases'
              : lang === 'pt'
              ? 'Endereços dedicados nos principais mercados mundiais para suas compras internacionais'
              : 'Direcciones dedicadas en los principales mercados globales para tus compras internacionales'}
          </p>
          <CoverageMap />
        </div>
      </section>

      {/* Shipping Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <ShippingServices />
        </div>
      </section>

      {/* One Stop Service Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <OneStopService />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute -left-32 top-1/3 w-72 h-72 rounded-full bg-primary/20 blur-3xl"></div>
          <div className="absolute right-1/4 bottom-0 w-64 h-64 rounded-full bg-secondary/20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full inline-block mb-4"
            >
              {lang === 'en' ? 'Why Choose Us' : lang === 'pt' ? 'Por que nos escolher' : 'Por qué elegirnos'}
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              {lang === 'en' ? 'Exclusive Benefits' : lang === 'pt' ? 'Benefícios Exclusivos' : 'Beneficios Exclusivos'}
            </h2>
            <p className="text-muted-foreground text-lg">
              {lang === 'en'
                ? 'We offer innovative solutions that transform the way you manage your international shipments.'
                : lang === 'pt'
                ? 'Oferecemos soluções inovadoras que transformam a maneira como você gerencia seus envios internacionais.'
                : 'Ofrecemos soluciones innovadoras que transforman la forma en que gestionas tus envíos internacionales.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="h-full border bg-card rounded-2xl overflow-hidden"
                >
                  <div className="h-2 bg-gradient-to-r from-primary to-primary/60"></div>
                  <div className="p-8">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                      className="mb-6 text-primary bg-primary/10 p-4 rounded-2xl inline-flex"
                    >
                      {benefit.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="mt-6"
                    >
                      <Link href={`/${lang}/explanation`}>
                        <motion.span
                          whileHover={{ x: 5 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                          className="inline-flex items-center text-sm font-medium text-primary"
                        >
                          {lang === 'en' ? 'Learn More' : lang === 'pt' ? 'Saiba mais' : 'Saber más'}
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </motion.span>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between"
          >
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">
                {lang === 'en' ? 'Ready to Transform Your Logistics?' : lang === 'pt' ? 'Pronto para transformar sua logística?' : '¿Listo para transformar tu logística?'}
              </h3>
              <p className="text-muted-foreground">
                {lang === 'en'
                  ? 'Join thousands of businesses already saving time and money with our solutions.'
                  : lang === 'pt'
                  ? 'Junte-se a milhares de empresas que já estão economizando tempo e dinheiro com nossas soluções.'
                  : 'Únete a miles de empresas que ya están ahorrando tiempo y dinero con nuestras soluciones.'}
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link href={`/${lang}/auth`}>
                <span className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium transition-colors hover:bg-primary/90">
                  {cta.primary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-4 text-muted-foreground text-sm"
          >
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{lang === 'en' ? 'Over 10,000 satisfied customers' : lang === 'pt' ? 'Mais de 10.000 clientes satisfeitos' : 'Más de 10,000 clientes satisfechos'}</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{lang === 'en' ? 'Presence in 50+ countries' : lang === 'pt' ? 'Presença em 50+ países' : 'Presencia en más de 50 países'}</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{lang === 'en' ? '24/7 Support' : lang === 'pt' ? 'Suporte 24/7' : 'Soporte 24/7'}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shipping Calculator Section */}
      <section className="bg-accent/30 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">{cta.calculateShipping}</h2>
          <p className="text-xl text-muted-foreground mb-12">{cta.shippingDescription}</p>
          <ShippingCalculator />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">{cta.readyTitle}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">{cta.readyDescription}</p>
            <Link href={`/${lang}/auth`}>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-xl hover:bg-white/90 transition-all">
                {cta.primary} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">{cta.testimonialsTitle}</h2>
          <p className="text-xl text-muted-foreground mb-12">{cta.testimonialsDescription}</p>
          <TestimonialSlider />
        </div>
      </section>
    </div>
  );
}