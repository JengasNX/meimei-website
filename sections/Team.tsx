import { UserRound } from "lucide-react";
import { MemberAvatar } from "@/components/MemberAvatar";
import { Reveal } from "@/components/motion";
import { SectionHeading, SectionShell } from "@/components/SectionShell";
import { teamMembers } from "@/data/team";

export function Team() {
  return (
    <SectionShell id="team">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Team · Команда проекта"
          title={
            <>
              Люди, которые растят <span className="text-gradient">шерстяную империю</span>
            </>
          }
          description="Команда проекта будет пополняться — новые участники добавляются по решению владельца."
        />
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Reveal key={member.id} delay={0.08} className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-surface/55 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              {/* Свечение сверху */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent/8 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="relative flex items-center gap-4">
                <MemberAvatar
                  src={member.avatar}
                  alt={`Аватар ${member.name}`}
                  initials={member.initials}
                  className="h-16 w-16 shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-display text-base font-bold text-frost">{member.name}</h3>
                  <p className="mt-1 text-[13px] font-semibold leading-snug text-accent">{member.role}</p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-mist">{member.bio}</p>
              <div className="mt-5 flex items-center justify-between border-t border-white/6 pt-4">
                {member.social ? (
                  <a href={member.social.url} className="text-sm font-semibold text-accent hover:text-accent-soft">
                    {member.social.label}
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs text-mist/60">
                    <UserRound className="h-3.5 w-3.5" />
                    Профиль появится позже
                  </span>
                )}
                {member.founder && (
                  <span className="rounded-full border border-neon/30 bg-neon/10 px-2.5 py-1 text-[10px] font-bold tracking-wider text-neon uppercase">
                    Владелец
                  </span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
