"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import Tabbutton from "./Tabbutton";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaGithub,
  FaLaravel,
  FaDatabase, // Filament için alternatif
  FaNpm, // npm ikonu
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiJavascript, SiCodeigniter, SiTypescript, SiAlpinedotjs } from "react-icons/si"; // TypeScript ve Alpine.js ikonları

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="flex justify-start space-x-4 flex-wrap gap-5">
        <li className="text-5xl text-orange-600">
          <FaHtml5 />
        </li>
        <li className="text-5xl text-yellow-500">
          <SiJavascript />
        </li>
        <li className="text-5xl text-blue-500">
          <FaReact />
        </li>
        <li className="text-5xl text-purple-600">
          <FaBootstrap />
        </li>
        <li className="text-5xl text-blue-600">
          <FaCss3Alt />
        </li>
        <li className="text-5xl text-pink-500">
          <FaSass />
        </li>
        <li className="text-5xl text-teal-400">
          <SiTailwindcss />
        </li>
        <li className="text-5xl text-white">
          <SiNextdotjs />
        </li>
        <li className="text-5xl text-purple-800">
          <FaGithub />
        </li>
        <li className="text-5xl text-red-700">
          <FaLaravel /> {/* Laravel */}
        </li>
        <li className="text-5xl text-red-600">
          <SiCodeigniter /> {/* CodeIgniter */}
        </li>
        <li className="text-5xl text-blue-500">
          <FaDatabase /> {/* Filament için alternatif */}
        </li>
        <li className="text-5xl text-blue-600">
          <SiTypescript /> {/* TypeScript */}
        </li>
        <li className="text-5xl text-blue-400">
          <SiAlpinedotjs /> {/* Alpine.js */}
        </li>
        <li className="text-5xl text-red-600">
          <FaNpm /> {/* npm */}
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Pamukkale University</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Sıfırdan ileri düzey web geliştirme kursu (Udemy)</li>
        <li>Patika.dev Web Geliştirme Kursu</li>
      </ul>
    ),
  },
];


const About = () => {
  const [tab, setTab] = useState("skills");

  const [isPending, startTransition] = useTransition();

  const handleChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="text-white mb-10" id="about">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 px-4"
      >
        <Image
          className="rounded-md w-full"
          alt=""
          src="./about-image.jpeg"
          width={500}
          height={500}
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg">
            Merhaba, ben Hasan Emir Çağlar. 2 yıllık Frontend Developer deneyimimle kurumsal web siteleri, 
            web uygulamaları ve özelleştirilmiş projeler geliştirdim. UI/UX tasarımcıları tarafından hazırlanan Photoshop ve Figma dosyalarını başarıyla koda dönüştürdüm. 
            Ayrıca, Laravel, CodeIgniter ve Filament kullanarak admin panelleri üzerinde entegrasyon, düzenleme ve migration işlemleri gerçekleştirdim. npm paketlerini ve Git’i aktif olarak kullanıyor, API’ler ile verileri yönetiyorum. 
            Amacım, kendimi sürekli geliştirerek sektörde daha ileri seviyelere ulaşmak ve yeni iş fırsatları keşfetmek.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <Tabbutton
              selectTab={() => handleChange("skills")}
              active={tab === "skills"}
            >
              Yeteneklerim
            </Tabbutton>

            <Tabbutton
              selectTab={() => handleChange("education")}
              active={tab === "education"}
            >
              Eğitim
            </Tabbutton>

            <Tabbutton
              selectTab={() => handleChange("certifications")}
              active={tab === "certifications"}
            >
              Sertifikalar
            </Tabbutton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
