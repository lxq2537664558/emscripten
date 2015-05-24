mergeInto(LibraryManager.library, {
#if SYSCALL_DEBUG
  $SYSCALLS: {
    NAME_TO_CODE: {
      SYS_restart_syscall: 0,
      SYS_exit: 1,
      SYS_fork: 2,
      SYS_read: 3,
      SYS_write: 4,
      SYS_open: 5,
      SYS_close: 6,
      SYS_creat: 8,
      SYS_link: 9,
      SYS_unlink: 10,
      SYS_execve: 11,
      SYS_chdir: 12,
      SYS_mknod: 14,
      SYS_chmod: 15,
      SYS_lchown: 16,
      SYS_lseek: 19,
      SYS_getpid: 20,
      SYS_mount: 21,
      SYS_setuid: 23,
      SYS_getuid: 24,
      SYS_ptrace: 26,
      SYS_pause: 29,
      SYS_access: 33,
      SYS_nice: 34,
      SYS_sync: 36,
      SYS_kill: 37,
      SYS_rename: 38,
      SYS_mkdir: 39,
      SYS_rmdir: 40,
      SYS_dup: 41,
      SYS_pipe: 42,
      SYS_times: 43,
      SYS_brk: 45,
      SYS_setgid: 46,
      SYS_getgid: 47,
      SYS_geteuid: 49,
      SYS_getegid: 50,
      SYS_acct: 51,
      SYS_umount2: 52,
      SYS_ioctl: 54,
      SYS_fcntl: 55,
      SYS_setpgid: 57,
      SYS_umask: 60,
      SYS_chroot: 61,
      SYS_ustat: 62,
      SYS_dup2: 63,
      SYS_getppid: 64,
      SYS_getpgrp: 65,
      SYS_setsid: 66,
      SYS_sigaction: 67,
      SYS_setreuid: 70,
      SYS_setregid: 71,
      SYS_sigsuspend: 72,
      SYS_sigpending: 73,
      SYS_sethostname: 74,
      SYS_setrlimit: 75,
      SYS_getrusage: 77,
      SYS_gettimeofday: 78,
      SYS_settimeofday: 79,
      SYS_getgroups: 80,
      SYS_setgroups: 81,
      SYS_symlink: 83,
      SYS_readlink: 85,
      SYS_uselib: 86,
      SYS_swapon: 87,
      SYS_reboot: 88,
      SYS_munmap: 91,
      SYS_truncate: 92,
      SYS_ftruncate: 93,
      SYS_fchmod: 94,
      SYS_fchown: 95,
      SYS_getpriority: 96,
      SYS_setpriority: 97,
      SYS_statfs: 99,
      SYS_fstatfs: 100,
      SYS_syslog: 103,
      SYS_setitimer: 104,
      SYS_getitimer: 105,
      SYS_stat: 106,
      SYS_lstat: 107,
      SYS_fstat: 108,
      SYS_vhangup: 111,
      SYS_wait4: 114,
      SYS_swapoff: 115,
      SYS_sysinfo: 116,
      SYS_fsync: 118,
      SYS_sigreturn: 119,
      SYS_clone: 120,
      SYS_setdomainname: 121,
      SYS_uname: 122,
      SYS_adjtimex: 124,
      SYS_mprotect: 125,
      SYS_sigprocmask: 126,
      SYS_init_module: 128,
      SYS_delete_module: 129,
      SYS_quotactl: 131,
      SYS_getpgid: 132,
      SYS_fchdir: 133,
      SYS_bdflush: 134,
      SYS_sysfs: 135,
      SYS_personality: 136,
      SYS_setfsuid: 138,
      SYS_setfsgid: 139,
      SYS__llseek: 140,
      SYS_getdents: 141,
      SYS__newselect: 142,
      SYS_flock: 143,
      SYS_msync: 144,
      SYS_readv: 145,
      SYS_writev: 146,
      SYS_getsid: 147,
      SYS_fdatasync: 148,
      SYS__sysctl: 149,
      SYS_mlock: 150,
      SYS_munlock: 151,
      SYS_mlockall: 152,
      SYS_munlockall: 153,
      SYS_sched_setparam: 154,
      SYS_sched_getparam: 155,
      SYS_sched_setscheduler: 156,
      SYS_sched_getscheduler: 157,
      SYS_sched_yield: 158,
      SYS_sched_get_priority_max: 159,
      SYS_sched_get_priority_min: 160,
      SYS_sched_rr_get_interval: 161,
      SYS_nanosleep: 162,
      SYS_mremap: 163,
      SYS_setresuid: 164,
      SYS_getresuid: 165,
      SYS_poll: 168,
      SYS_nfsservctl: 169,
      SYS_setresgid: 170,
      SYS_getresgid: 171,
      SYS_prctl: 172,
      SYS_rt_sigreturn: 173,
      SYS_rt_sigaction: 174,
      SYS_rt_sigprocmask: 175,
      SYS_rt_sigpending: 176,
      SYS_rt_sigtimedwait: 177,
      SYS_rt_sigqueueinfo: 178,
      SYS_rt_sigsuspend: 179,
      SYS_pread64: 180,
      SYS_pwrite64: 181,
      SYS_chown: 182,
      SYS_getcwd: 183,
      SYS_capget: 184,
      SYS_capset: 185,
      SYS_sigaltstack: 186,
      SYS_sendfile: 187,
      SYS_vfork: 190,
      SYS_ugetrlimit: 191,
      SYS_mmap2: 192,
      SYS_truncate64: 193,
      SYS_ftruncate64: 194,
      SYS_stat64: 195,
      SYS_lstat64: 196,
      SYS_fstat64: 197,
      SYS_lchown32: 198,
      SYS_getuid32: 199,
      SYS_getgid32: 200,
      SYS_geteuid32: 201,
      SYS_getegid32: 202,
      SYS_setreuid32: 203,
      SYS_setregid32: 204,
      SYS_getgroups32: 205,
      SYS_setgroups32: 206,
      SYS_fchown32: 207,
      SYS_setresuid32: 208,
      SYS_getresuid32: 209,
      SYS_setresgid32: 210,
      SYS_getresgid32: 211,
      SYS_chown32: 212,
      SYS_setuid32: 213,
      SYS_setgid32: 214,
      SYS_setfsuid32: 215,
      SYS_setfsgid32: 216,
      SYS_getdents64: 217,
      SYS_pivot_root: 218,
      SYS_mincore: 219,
      SYS_madvise: 220,
      SYS_fcntl64: 221,
      SYS_gettid: 224,
      SYS_readahead: 225,
      SYS_setxattr: 226,
      SYS_lsetxattr: 227,
      SYS_fsetxattr: 228,
      SYS_getxattr: 229,
      SYS_lgetxattr: 230,
      SYS_fgetxattr: 231,
      SYS_listxattr: 232,
      SYS_llistxattr: 233,
      SYS_flistxattr: 234,
      SYS_removexattr: 235,
      SYS_lremovexattr: 236,
      SYS_fremovexattr: 237,
      SYS_tkill: 238,
      SYS_sendfile64: 239,
      SYS_futex: 240,
      SYS_sched_setaffinity: 241,
      SYS_sched_getaffinity: 242,
      SYS_io_setup: 243,
      SYS_io_destroy: 244,
      SYS_io_getevents: 245,
      SYS_io_submit: 246,
      SYS_io_cancel: 247,
      SYS_exit_group: 248,
      SYS_lookup_dcookie: 249,
      SYS_epoll_create: 250,
      SYS_epoll_ctl: 251,
      SYS_epoll_wait: 252,
      SYS_remap_file_pages: 253,
      SYS_set_tid_address: 256,
      SYS_timer_create: 257,
      SYS_timer_settime: 258,
      SYS_timer_gettime: 259,
      SYS_timer_getoverrun: 260,
      SYS_timer_delete: 261,
      SYS_clock_settime: 262,
      SYS_clock_gettime: 263,
      SYS_clock_getres: 264,
      SYS_clock_nanosleep: 265,
      SYS_statfs64: 266,
      SYS_fstatfs64: 267,
      SYS_tgkill: 268,
      SYS_utimes: 269,
      SYS_fadvise64_64: 270,
      SYS_pciconfig_iobase: 271,
      SYS_pciconfig_read: 272,
      SYS_pciconfig_write: 273,
      SYS_mq_open: 274,
      SYS_mq_unlink: 275,
      SYS_mq_timedsend: 276,
      SYS_mq_timedreceive: 277,
      SYS_mq_notify: 278,
      SYS_mq_getsetattr: 279,
      SYS_waitid: 280,
      SYS_socket: 281,
      SYS_bind: 282,
      SYS_connect: 283,
      SYS_listen: 284,
      SYS_accept: 285,
      SYS_getsockname: 286,
      SYS_getpeername: 287,
      SYS_socketpair: 288,
      SYS_send: 289,
      SYS_sendto: 290,
      SYS_recv: 291,
      SYS_recvfrom: 292,
      SYS_shutdown: 293,
      SYS_setsockopt: 294,
      SYS_getsockopt: 295,
      SYS_sendmsg: 296,
      SYS_recvmsg: 297,
      SYS_semop: 298,
      SYS_semget: 299,
      SYS_semctl: 300,
      SYS_msgsnd: 301,
      SYS_msgrcv: 302,
      SYS_msgget: 303,
      SYS_msgctl: 304,
      SYS_shmat: 305,
      SYS_shmdt: 306,
      SYS_shmget: 307,
      SYS_shmctl: 308,
      SYS_add_key: 309,
      SYS_request_key: 310,
      SYS_keyctl: 311,
      SYS_semtimedop: 312,
      SYS_vserver: 313,
      SYS_ioprio_set: 314,
      SYS_ioprio_get: 315,
      SYS_inotify_init: 316,
      SYS_inotify_add_watch: 317,
      SYS_inotify_rm_watch: 318,
      SYS_mbind: 319,
      SYS_get_mempolicy: 320,
      SYS_set_mempolicy: 321,
      SYS_openat: 322,
      SYS_mkdirat: 323,
      SYS_mknodat: 324,
      SYS_fchownat: 325,
      SYS_futimesat: 326,
      SYS_fstatat64: 327,
      SYS_unlinkat: 328,
      SYS_renameat: 329,
      SYS_linkat: 330,
      SYS_symlinkat: 331,
      SYS_readlinkat: 332,
      SYS_fchmodat: 333,
      SYS_faccessat: 334,
      SYS_pselect6: 335,
      SYS_ppoll: 336,
      SYS_unshare: 337,
      SYS_set_robust_list: 338,
      SYS_get_robust_list: 339,
      SYS_splice: 340,
      SYS_sync_file_range2: 341,
      SYS_tee: 342,
      SYS_vmsplice: 343,
      SYS_move_pages: 344,
      SYS_getcpu: 345,
      SYS_epoll_pwait: 346,
      SYS_kexec_load: 347,
      SYS_utimensat: 348,
      SYS_signalfd: 349,
      SYS_timerfd_create: 350,
      SYS_eventfd: 351,
      SYS_fallocate: 352,
      SYS_timerfd_settime: 353,
      SYS_timerfd_gettime: 354,
      SYS_signalfd4: 355,
      SYS_eventfd2: 356,
      SYS_epoll_create1: 357,
      SYS_dup3: 358,
      SYS_pipe2: 359,
      SYS_inotify_init1: 360,
      SYS_preadv: 361,
      SYS_pwritev: 362,
      SYS_rt_tgsigqueueinfo: 363,
      SYS_perf_event_open: 364,
      SYS_recvmmsg: 365,
      SYS_accept4: 366,
      SYS_fanotify_init: 367,
      SYS_fanotify_mark: 368,
      SYS_prlimit64: 369,
      SYS_name_to_handle_at: 370,
      SYS_open_by_handle_at: 371,
      SYS_clock_adjtime: 372,
      SYS_syncfs: 373,
      SYS_sendmmsg: 374,
      SYS_setns: 375,
      SYS_process_vm_readv: 376,
      SYS_process_vm_writev: 377,
      SYS_kcmp: 378,
      SYS_finit_module: 379
    },
    CODE_TO_NAME: {},
    getFromCode: function(code) {
      if (!SYSCALLS.CODE_TO_NAME[0]) {
        for (var name in SYSCALLS.NAME_TO_CODE) {
          SYSCALLS.CODE_TO_NAME[SYSCALLS.NAME_TO_CODE[name]] = name;
        }
      }
      assert(SYSCALLS.CODE_TO_NAME[code]);
      return SYSCALLS.CODE_TO_NAME[code];
    }
  },
#endif

#if SYSCALL_DEBUG
  __syscall__deps: ['$SYSCALLS', '$FS'],
#endif
  __syscall: function(which, varargs) {
    var get;
    if (typeof which === 'number') {
      get = function() {
        var ret = {{{ makeGetValue('varargs', '0', 'i32') }}};
        varargs += 4;
        return ret;
      }
    } else {
#if ASSERTIONS
      assert(varargs === 0);
#endif
      var array = which;
      var which = array[0];
      var index = 1;
      get = function() {
#if ASSERTIONS
        assert(index < array.length);
#endif
        return array[index++];
      };
    }
#if SYSCALL_DEBUG
    Module.printErr('syscall! ' + [which, SYSCALLS.getFromCode(which)]);
#endif
    switch (which) {
      case 5: { // open
        var pathname = get(), flags = get(), mode = get() /* optional TODO */;
        pathname = Pointer_stringify(pathname);
        try {
          var stream = FS.open(pathname, flags, mode);
          return stream.fd;
        } catch (e) {
          FS.handleFSError(e);
          return -1;
        }
      }
      case 6: { // close
        var fd = get();
        var stream = FS.getStream(fd);
        if (!stream) {
          ___setErrNo(ERRNO_CODES.EBADF);
          return -1;
        }
        try {
          FS.close(stream);
          return 0;
        } catch (e) {
          FS.handleFSError(e);
          return -1;
        }
      }
      case 54: { // ioctl
        var fd = get(), op = get(), tio = get();
        switch (op) {
          case 0x5401: { // TCGETS
            if (fd === 1 || fd === 2) { // stdout or stderr
#if SYSCALL_DEBUG
              Module.printErr('warning: not filling tio struct');
#endif
              return 0;
            }
            return -1;
          }
          default: abort('bad ioctl syscall ' + op);
        }
      }
      case 145: { // readv
        var fd = get(), iov = get(), iovcnt = get();
        var stream = FS.getStream(fd);
        if (!stream) {
          ___setErrNo(ERRNO_CODES.EBADF);
          return -1;
        }
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = {{{ makeGetValue('iov', 'i*8', 'i32') }}};
          var len = {{{ makeGetValue('iov', 'i*8 + 4', 'i32') }}};
          try {
            var curr = FS.read(stream, {{{ makeGetSlabs('ptr', 'i8', true) }}}, ptr, len);
          } catch (e) {
            FS.handleFSError(e);
            return -1;
          }
          if (curr < 0) return -1;
          ret += curr;
          if (curr < len) break; // nothing more to read
        }
        return ret;
      }
      case 146: { // writev
        var fd = get(), iov = get(), iovcnt = get();
        var stream = FS.getStream(fd);
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
          var ptr = {{{ makeGetValue('iov', 'i*8', 'i32') }}};
          var len = {{{ makeGetValue('iov', 'i*8 + 4', 'i32') }}};
          try {
            var curr = FS.write(stream, {{{ makeGetSlabs('ptr', 'i8', true) }}}, ptr, len);
          } catch (e) {
            FS.handleFSError(e);
            return -1;
          }
          if (curr < 0) return -1;
          ret += curr;
        }
        return ret;
      }
      default: abort('bad syscall ' + which);
    }
  },

  __syscall_cp__deps: ['__syscall'],
  __syscall_cp: function() {
    var args = Array.prototype.slice.call(arguments);
    return ___syscall(args, 0);
  },

  // methods that musl could do, but for now we do
  _pthread_cleanup_push: function(){},
  _pthread_cleanup_pop: function(){},
  __pthread_self: function() { abort() },
});

