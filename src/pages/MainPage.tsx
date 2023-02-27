import React from "react";
import {
  AppShell,
  Group,
  Tabs,
  Burger,
  createStyles,
  Container
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../assets/images/headscale_dots.png";
import DarkModeToggle from "../components/DarkModeToggle";

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[2]
    }`,
    marginBottom: 5
  },
  mainSection: {
    paddingBottom: theme.spacing.sm
  },
  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none"
    }
  },
  tabsList: {
    borderBottom: "0 !important"
  },
  tabs: {
    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  },
  tab: {
    fontWeight: 500,
    height: 38,
    backgroundColor: "transparent",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1]
    },

    "&[data-active]": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      borderColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[2]
    }
  }
}));

const MainPage = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, theme, cx } = useStyles();

  return (
    <AppShell
      padding="md"
      fixed={false}
      header={
        <div className={classes.header}>
          <Container className={classes.mainSection}>
            <Group position="apart">
              <img style={{ height: "60px" }} src={Logo} alt="Logo" />
              <Burger
                opened={opened}
                onClick={toggle}
                className={classes.burger}
                size="sm"
              />
              <DarkModeToggle />
            </Group>
          </Container>
          <Container>
            <Tabs
              defaultValue="tbDevices"
              variant="outline"
              classNames={{
                root: classes.tabs,
                tabsList: classes.tabsList,
                tab: classes.tab
              }}
            >
              <Tabs.List>
                <Tabs.Tab icon value="tbDevices" key={1}>
                  Devices
                </Tabs.Tab>
                <Tabs.Tab value="tbUsers" key={2}>
                  Users
                </Tabs.Tab>
                <Tabs.Tab value="tbACL" key={3}>
                  ACLs
                </Tabs.Tab>
                <Tabs.Tab value="tbSettings" key={4}>
                  Settings
                </Tabs.Tab>
              </Tabs.List>
            </Tabs>
          </Container>
        </div>
      }
    >
      Your application goes here
    </AppShell>
  );
};

export default MainPage;