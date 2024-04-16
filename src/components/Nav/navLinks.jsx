import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const NavLinks = () => {
  const controlsHome = useAnimation();
  const { ref: refHome, inView: inViewHome } = useInView();
  const controlsProject = useAnimation();
  const { ref: refProject, inView: inViewProject } = useInView();
  const controlsService = useAnimation();
  const { ref: refService, inView: inViewService } = useInView();
  const controlsAbout = useAnimation();
  const { ref: refAbout, inView: inViewAbout } = useInView();
  const controlsBlog = useAnimation();
  const { ref: refBlog, inView: inViewBlog } = useInView();
  const controlsShop = useAnimation();
  const { ref: refShop, inView: inViewShop } = useInView();
  const controlsContact = useAnimation();
  const { ref: refContact, inView: inViewContact } = useInView();

  const transition = { duration: 0.5, ease: "easeInOut" };

  React.useEffect(() => {
    if (inViewHome) {
      controlsHome.start({ opacity: 1, y: 0, transition });
    } else {
      controlsHome.start({ opacity: 0, y: -20 });
    }
  }, [controlsHome, inViewHome, transition]);

  React.useEffect(() => {
    if (inViewProject) {
      controlsProject.start({ opacity: 1, y: 0, transition });
    } else {
      controlsProject.start({ opacity: 0, y: -20 });
    }
  }, [controlsProject, inViewProject, transition]);

  React.useEffect(() => {
    if (inViewService) {
      controlsService.start({ opacity: 1, y: 0, transition });
    } else {
      controlsService.start({ opacity: 0, y: -20 });
    }
  }, [controlsService, inViewService, transition]);

  React.useEffect(() => {
    if (inViewAbout) {
      controlsAbout.start({ opacity: 1, y: 0, transition });
    } else {
      controlsAbout.start({ opacity: 0, y: -20 });
    }
  }, [controlsAbout, inViewAbout, transition]);

  React.useEffect(() => {
    if (inViewBlog) {
      controlsBlog.start({ opacity: 1, y: 0, transition });
    } else {
      controlsBlog.start({ opacity: 0, y: -20 });
    }
  }, [controlsBlog, inViewBlog, transition]);

  React.useEffect(() => {
    if (inViewShop) {
      controlsShop.start({ opacity: 1, y: 0, transition });
    } else {
      controlsShop.start({ opacity: 0, y: -20 });
    }
  }, [controlsShop, inViewShop, transition]);

  React.useEffect(() => {
    if (inViewContact) {
      controlsContact.start({ opacity: 1, y: 0, transition });
    } else {
      controlsContact.start({ opacity: 0, y: -20 });
    }
  }, [controlsContact, inViewContact, transition]);

  return (
    <div className="flex gap-3 medium:flex-col">
      <motion.a
        className="Nav-hover"
        href="#home"
        animate={controlsHome}
        initial={{ opacity: 0, y: -20 }}
        ref={refHome}
      >
        Home
      </motion.a>
      <motion.a
        className="Nav-hover"
        href="#project"
        animate={controlsProject}
        initial={{ opacity: 0, y: -20 }}
        ref={refProject}
      >
        Project
      </motion.a>
      <motion.a
        className="Nav-hover"
        href="#service"
        animate={controlsService}
        initial={{ opacity: 0, y: -20 }}
        ref={refService}
      >
        Service
      </motion.a>
      <motion.a
        className="Nav-hover"
        href="#about"
        animate={controlsAbout}
        initial={{ opacity: 0, y: -20 }}
        ref={refAbout}
      >
        About
      </motion.a>
      <motion.a
        className="Nav-hover"
        href="#blog"
        animate={controlsBlog}
        initial={{ opacity: 0, y: -20 }}
        ref={refBlog}
      >
        Blog
      </motion.a>
      <motion.a
        className="Nav-hover"
        href="#shop"
        animate={controlsShop}
        initial={{ opacity: 0, y: -20 }}
        ref={refShop}
      >
        Shop
      </motion.a>
      <motion.a
        className="Nav-hover"
        href="#contact"
        animate={controlsContact}
        initial={{ opacity: 0, y: -20 }}
        ref={refContact}
      >
        Contact
      </motion.a>
    </div>
  );
};

export default NavLinks;